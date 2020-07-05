import * as vscode from 'vscode';
import opcodes from './ASM_opcodes/_index';

const out: vscode.CompletionItem[] = Object
  .entries(opcodes)
  .flatMap(([_, data]) => {
    const out: vscode.CompletionItem[] = [];
    const opcode = data.mnemonic;
    const documentation = `${data.description.replace(/\n/g, '\n\n')}\n\n## pseudocode:\n\`\`\`${data.pseudocode}\`\`\``;
    const params = (data.parameters as any[]).map((p: any, i) => {
      const label = (typeof p === 'function') ? p(0).label : p.label;
      return `\${${i+1}:${label}}`;
    });

    const snippet = `${opcode} ${params.join(', ')}`;
    out.push({
      label: opcode,
      kind: vscode.CompletionItemKind.Function,
      documentation: new vscode.MarkdownString(documentation),
      insertText: new vscode.SnippetString(snippet),
    });

    const simple = (data as any)['simple'] as typeof opcodes.addic.simple;
    if (simple) {
      out.push(...simple.flatMap((d) => {
        return {
          label: d.name,
          kind: vscode.CompletionItemKind.Function,
          documentation: new vscode.MarkdownString(`(simplified from ${opcode})\n\nequivalent to:\n\`\`\`\n${d.equivalent}\n\`\`\``),
          insertText: new vscode.SnippetString(
            d.name + ' ' +
            d.parameters?.map((p: any, i) => {
              const label = (typeof p === 'function') ? p(0).label : p.label;
              return `\${${i+1}:${label}}`;
            }).join(', ')
          )
        };
      }));
    }

    return out;
  });

export const compiledList = out;