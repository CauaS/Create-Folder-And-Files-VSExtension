import * as vscode from "vscode";
const path = require("path");

export default async function getComponentDirectory(
  folderPathFromContextMenu: any
): Promise<vscode.Uri | undefined> {
  let directory = undefined;
  if (!folderPathFromContextMenu) {
    console.log("Não tem tem folder path from context");
  }

  if (folderPathFromContextMenu) {
    const directoryStatic = await vscode.workspace.fs.stat(
      folderPathFromContextMenu
    );

    if (directoryStatic.type === vscode.FileType.Directory) {
      directory = folderPathFromContextMenu;
      console.log({ directory });
    } else {
      const parentDirectory = path.dirname(
        (folderPathFromContextMenu as vscode.Uri).fsPath
      );
      directory = vscode.Uri.file(parentDirectory);
    }
  }

  return directory;
}
