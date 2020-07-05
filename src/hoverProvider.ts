import * as vscode from 'vscode';
import argDoc from './hover_docs/index';

export const GCTRealMateHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) return undefined;

    const docToFind = document.lineAt(position.line).text.substring(wordRange.start.character, wordRange.end.character));
    const result = (argDoc as any)[docToFind];
    if (result) return new vscode.Hover(new vscode.MarkdownString(result));
    else return undefined;
  }
}