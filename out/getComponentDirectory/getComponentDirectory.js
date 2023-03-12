"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
async function getComponentDirectory(folderPathFromContextMenu) {
    let directory = undefined;
    if (!folderPathFromContextMenu) {
        console.log("Não tem tem folder path from context");
    }
    if (folderPathFromContextMenu) {
        const directoryStatic = await vscode.workspace.fs.stat(folderPathFromContextMenu);
        if (directoryStatic.type === vscode.FileType.Directory) {
            directory = folderPathFromContextMenu;
            console.log({ directory });
        }
        else {
            const parentDirectory = path.dirname(folderPathFromContextMenu.fsPath);
            directory = vscode.Uri.file(parentDirectory);
        }
    }
    return directory;
}
exports.default = getComponentDirectory;
//# sourceMappingURL=getComponentDirectory.js.map