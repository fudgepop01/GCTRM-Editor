import * as vscode from 'vscode';

export const GCTRealMateFolder: vscode.FoldingRangeProvider = {
  provideFoldingRanges(
    document: vscode.TextDocument,
    context: vscode.FoldingContext,
    token: vscode.CancellationToken
  ) {
    const foldingRanges: vscode.FoldingRange[] = [];
    let starts = [];
    for (let i = 0; i < document.lineCount; i++) {
      if (document.lineAt(i).text.startsWith('{')) {
        starts.push(i);
      } else if (document.lineAt(i).text.startsWith('}')) {
        const s = starts.pop();
        if (s) {
          foldingRanges.push({
            start: s,
            end: i - 1,
            kind: vscode.FoldingRangeKind.Region
          });
        }
      }
    }

    return foldingRanges;
  }
}