import * as vscode from 'vscode';
import createComponentFolder from './createComponentFolder/createComponentFolder';
import getComponentDirectory from './getComponentDirectory/getComponentDirectory';
import getComponentNameFromView from './getComponentNameFromView/getComponentNameFromView';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "create-folder-files" is now active!');

	let disposable = vscode.commands.registerCommand('extension.createFolder', async (event) => {
		try {
			const folderName = await getComponentNameFromView();
			if(!folderName) {
				return;
			}

			const componentDirectory = await getComponentDirectory(event);
			if(!componentDirectory) {
				return;
			}

			await createComponentFolder({
				componentName: folderName,
				directoryPath: componentDirectory.fsPath
			});
			vscode.window.showInformationMessage(`Created ${folderName} component`);
		} catch (e) {
			console.log(e);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
