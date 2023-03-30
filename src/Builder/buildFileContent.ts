import {
  buildContentForStories,
  buildContentForTest,
  buildContentForTypescript,
} from "./Contents/Contents";

interface IFileContentBuilder {
  forTypescript(componentName: string): FileContentBuilder;
  forTest(componentName: string): FileContentBuilder;
  forStories(componentName: string): FileContentBuilder;
  build(): string;
}
enum TypesForFiles  {
  ts = "ts",
  tst = "tst",
  storie = "storie"
}
export class FileContentBuilder implements IFileContentBuilder {
  private componentName: string = "";
  private typeFileToBuild: string = "";

  forTypescript(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = TypesForFiles.ts;
    return this;
  }
  forTest(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = TypesForFiles.tst;
    return this;
  }
  forStories(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = TypesForFiles.storie;
    return this;
  }
  build(): string {
    if (this.typeFileToBuild === TypesForFiles.ts) {
      return buildContentForTypescript(this.componentName);
    } else if (this.typeFileToBuild === TypesForFiles.tst) {
      return buildContentForTest(this.componentName);
    } else {
      return buildContentForStories(this.componentName);
    }  
  }
}
