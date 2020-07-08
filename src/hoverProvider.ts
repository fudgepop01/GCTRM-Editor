import * as vscode from 'vscode';
import argDoc from './hover_docs/index';
import { getLastMappedFunctionFromOffset } from './completion_items/mapfiles';

export const GCTRealMateHoverProvider: vscode.HoverProvider = {
  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ) {
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) { return undefined; }

    const docToFind = document.lineAt(position.line).text.substring(wordRange.start.character, wordRange.end.character);
    let result;
    if ((result = (argDoc as any)[docToFind])) {
      return new vscode.Hover(new vscode.MarkdownString(result));
    } else if (/[0-9a-zA-Z]{8}/g.test(docToFind)) {
      return new vscode.Hover(new vscode.MarkdownString(await getLastMappedFunctionFromOffset(parseInt(docToFind, 16))));
    }
    else { return undefined; }
  }
}