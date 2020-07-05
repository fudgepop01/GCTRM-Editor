import * as vscode from 'vscode';
import opcodes from './ASM_opcodes/_index';

const out: vscode.CompletionItem[] = Object
  .entries(opcodes)
  .map(([_, data]) => {
    const opcode = data.mnemonic;
    const documentation = `${data.description.replace(/\n/g, '\n\n')}\n\n## pseudocode:\n\`\`\`${data.pseudocode}\`\`\``;
    const params = (data.parameters as any[]).map((p: any, i) => {
      const label = (typeof p === 'function') ? p(0).label : p.label;
      return `\${${i+1}:${label}}`;
    });

    const snippet = `${opcode} ${params.join(', ')}`;
    return {
      label: opcode,
      kind: vscode.CompletionItemKind.Function,
      documentation: new vscode.MarkdownString(documentation),
      insertText: new vscode.SnippetString(snippet),
    }
  });

export const compiledList = out;