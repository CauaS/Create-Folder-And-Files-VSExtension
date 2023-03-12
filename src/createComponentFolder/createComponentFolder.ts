import path = require("path");
import * as vscode from "vscode";
import { FileContentBuilder } from "../Builder/buildFileContent";
export interface CreateComponentFolder {
  componentName: string;
  directoryPath: string;
}

export default async function createComponentFolder({
  componentName,
  directoryPath,
}: CreateComponentFolder) {
  try {
    const configuration = vscode.workspace.getConfiguration();

    let filesToCreate = [];
    if (configuration.get("filesToCreate.typescript")) {
      filesToCreate.push({
        extension: configuration.get(
          "filesToCreate.extensionsFiles.typescript"
        ),
        content: new FileContentBuilder().forTypescript(componentName).build(),
      });
    }

    if (configuration.get("filesToCreate.test")) {
      filesToCreate.push({
        extension: configuration.get("filesToCreate.extensionsFiles.test"),
        content: new FileContentBuilder().forTest(componentName).build(),
      });
    }

    if (configuration.get("filesToCreate.stories")) {
      filesToCreate.push({
        extension: configuration.get("filesToCreate.extensionsFiles.stories"),
        content: new FileContentBuilder().forStories(componentName).build(),
      });
    }

    if (filesToCreate.length === 0) {
      return;
    }
    const fullDirectoryAndFileName = path.join(directoryPath, componentName);

    //This line will create a folder
    await vscode.workspace.fs.createDirectory(vscode.Uri.file(directoryPath));

    //This loop will iterate through fileToCreate array
    for (let file of filesToCreate) {
      const fileAndExtension = path.join(
        fullDirectoryAndFileName,
        componentName.concat(file.extension as string)
      );
      const fileAndContentObj = {
        uri: vscode.Uri.file(fileAndExtension),
        content: Buffer.from(file.content, "utf8")
      };
      await vscode.workspace.fs.writeFile(fileAndContentObj.uri, fileAndContentObj.content);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
