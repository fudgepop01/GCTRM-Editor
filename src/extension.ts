import * as vscode from 'vscode';
import { GCTRealMateProvider } from './completionProvider';
import { GCTRealMateFolder } from './foldingProvider';
import { GCTRealMateDefinitionProvider } from './definitionProvider';
import { GCTRealMateHoverProvider } from './hoverProvider';
import { autoFormat } from './auto-formatter';

export function activate(context: vscode.ExtensionContext) {
	const formatCommand = vscode.commands.registerCommand('gctrm-editor.auto-format', autoFormat);

	const provider = vscode.languages.registerCompletionItemProvider('gctrm', GCTRealMateProvider, '<', '%');
	const foldingProvider = vscode.languages.registerFoldingRangeProvider('gctrm', GCTRealMateFolder);
	const definitionProvider = vscode.languages.registerDefinitionProvider('gctrm', GCTRealMateDefinitionProvider);
	const hoverProvider = vscode.languages.registerHoverProvider('gctrm', GCTRealMateHoverProvider);

	context.subscriptions.push(
		provider,
		foldingProvider,
		definitionProvider,
		hoverProvider,
		formatCommand
	);
}

export function deactivate() {}