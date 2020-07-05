import * as vscode from 'vscode';

export const GCTRealMateDefinitionProvider: vscode.DefinitionProvider = {
  provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Location | vscode.Location[] | vscode.LocationLink[]> {

    const links: vscode.LocationLink[] = []
    const wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange) return [];

    const definitionToFind = document.lineAt(position.line).text.substring(wordRange.start.character, wordRange.end.character));
    for (let i = 0; i < document.lineCount; i++) {
      const text = document.lineAt(i).text;
      const idx = text.indexOf(definitionToFind);
      if (idx !== -1) {

        if (new RegExp(`^(?:\\.alias ${definitionToFind} |\\.macro ${definitionToFind}\\(|${definitionToFind}:\\s*$)`).test(text)) {
          links.push({
            targetRange: new vscode.Range(
              new vscode.Position(i, idx),
              new vscode.Position(i, idx + definitionToFind.length)
            ),
            targetUri: document.uri,
            originSelectionRange: new vscode.Range(
              new vscode.Position(position.line, wordRange.start.character),
              new vscode.Position(position.line, wordRange.end.character)
            ),
          })
        }

      }
    }
    return links;
  }
}