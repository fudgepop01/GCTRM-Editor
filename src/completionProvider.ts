import * as vscode from 'vscode';
import { compiledList } from './completion_items/opcodes';
import { mapsAsCompletionItems } from './completion_items/mapfiles';

export const GCTRealMateProvider = async (): Promise<vscode.CompletionItemProvider> => {
  return {
    async provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken,
      context: vscode.CompletionContext
    ) {

      if (context.triggerCharacter === '$') {
        try {
          const out = await mapsAsCompletionItems();
          return out;
        } catch (e) {
          console.error(e);
          return [];
        }
      }

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
      layer = 0;
      const additions: { [key: string]: string[] } = {
        labels: [], // TODO
        aliases: [],
        macros: [],
        arguments: []
      };
      for (let line = 0; line < document.lineCount; line++) {
        const lineText = document.lineAt(line).text;
        if (lineText.startsWith('{')) { layer ++; }
        else if (lineText.startsWith('}')) { layer --; }

        if (layer === 0 || (startLine !== 0 && startLine <= line && line < endLine)) {
          const aliasMatch = lineText.match(/\.alias ([\w_]+)/);
          if (aliasMatch) {
            additions.aliases.push(aliasMatch[1])
          } else {
            const macrosMatch = lineText.match(/\.macro ([\w_]+)\s*?\((.*?)\)/);
            if (macrosMatch) {
              additions.macros.push(macrosMatch[1]);
              if (line === startLine) {
                additions.arguments.push(...macrosMatch[2].split(','));
              }
            } else {
              const labelMatch = lineText.match(/^([\w\d]+):/);
              if (labelMatch) {
                additions.labels.push(labelMatch[1]);
              }
            }
          }
        }
      }

      // convert the additions to autocompletion items and concat
      return [
        ...additions.labels.map(s => {
          return {
            label: s,
            kind: vscode.CompletionItemKind.Reference,
            insertText: s
          };
        }),
        ...additions.aliases.map(s => {
          return {
            label: s,
            kind: vscode.CompletionItemKind.Variable,
            insertText: s
          };
        }),
        ...additions.macros.map(s => {
          return {
            label: '%' + s,
            kind: vscode.CompletionItemKind.Method,
            insertText: new vscode.SnippetString(((context.triggerCharacter === '%') ? '' : '%') + s + '(${1:params...})'),
            filterText: s
          };
        }),
        ...additions.arguments.map(s => {
          return {
            label: s,
            kind: vscode.CompletionItemKind.Constant,
            insertText: s.substring((context.triggerCharacter === '<') ? 1 : 0),
            filterText: s.substring(1)
          };
        }),
        ...((context.triggerKind !== vscode.CompletionTriggerKind.TriggerCharacter) ? compiledList : [])
      ];
    }
  }
};