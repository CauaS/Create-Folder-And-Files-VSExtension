"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const createComponentFolder_1 = require("./createComponentFolder/createComponentFolder");
const getComponentDirectory_1 = require("./getComponentDirectory/getComponentDirectory");
const getComponentNameFromView_1 = require("./getComponentNameFromView/getComponentNameFromView");
function activate(context) {
    console.log('Congratulations, your extension "create-folder-files" is now active!');
    let disposable = vscode.commands.registerCommand('extension.createFolder', async (event) => {
        try {
            const folderName = await (0, getComponentNameFromView_1.default)();
            if (!folderName) {
                return;
            }
            const componentDirectory = await (0, getComponentDirectory_1.default)(event);
            if (!componentDirectory) {
                return;
            }
            await (0, createComponentFolder_1.default)({
                componentName: folderName,
                directoryPath: componentDirectory.fsPath
            });
            vscode.window.showInformationMessage(`Created ${folderName} component`);
        }
        catch (e) {
            console.log(e);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map