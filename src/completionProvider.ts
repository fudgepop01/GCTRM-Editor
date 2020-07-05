import * as vscode from 'vscode';
import { compiledList } from './completion_items/opcodes';

export const GCTRealMateProvider: vscode.CompletionItemProvider = {

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

    // get current scope
    let layer = 0;
    let startLine = 0;
    let endLine = document.lineCount;
    for (let line = position.line; line >= 0; line --) {
      const lineText = document.lineAt(line).text;
      if (lineText.startsWith('{')) {
        layer --;
        if (layer < 0) {
          startLine = line - 1;
          layer = 0;
          break;
        }
      } else if (lineText.startsWith('}')) {
        layer ++;
      }
    }
    if (startLine !== 0) {
      // we are therefor in a scope
      for (let line = position.line; line < document.lineCount; line ++) {
        const lineText = document.lineAt(line).text;
        if (lineText.startsWith('{')) {
          layer ++;
        } else if (lineText.startsWith('}')) {
          layer --;
          if (layer < 0) {
            endLine = line;
            layer = 0;
            break;
          }
        }
      }
    }

    // scan through document and get all aliases, macros, and current argument names
    const additions: { [key: string]: string[] } = {
      aliases: [],
      macros: [],
      arguments: []
    };
    for (let line = 0; line < document.lineCount; line++) {
      const lineText = document.lineAt(line).text;
      if (lineText.startsWith('{')) layer ++;
      else if (lineText.startsWith('}')) layer --;

      if (layer === 0 || (startLine <= line && line < endLine)) {
        const aliasMatch = lineText.match(/\.alias ([\w_]+)/);
        if (aliasMatch) {
          additions.aliases.push(aliasMatch[1])
        } else {
          const macrosMatch = lineText.match(/\.macro ([\w_]+)\s*?\((.*?)\)/)
          if (macrosMatch) {
            additions.macros.push(macrosMatch[1]);
            if (line === startLine) {
              additions.arguments.push(...macrosMatch[2].split(','));
            }
          }
        }
      }
    }

    // convert the additions to autocompletion items and concat
    return [
      ...additions.aliases.map(s => {
        return {
          label: s,
          kind: vscode.CompletionItemKind.Variable,
          insertText: s
        }
      }),
      ...additions.macros.map(s => {
        return {
          label: '%' + s,
          kind: vscode.CompletionItemKind.Method,
          insertText: new vscode.SnippetString('%' + s + '(${1:params...})'),
          filterText: s
        }
      }),
      ...additions.arguments.map(s => {
        return {
          label: s,
          kind: vscode.CompletionItemKind.Constant,
          insertText: s,
          filterText: s.substring(1)
        }
      }),
      ...((context.triggerKind !== vscode.CompletionTriggerKind.TriggerCharacter) ? compiledList : [])
    ]
  }
};