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
export class FileContentBuilder implements IFileContentBuilder {
  private componentName: string = "";
  private typeFileToBuild: string = "";

  forTypescript(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = "ts";
    return this;
  }
  forTest(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = "tst";
    return this;
  }
  forStories(componentName: string): FileContentBuilder {
    this.componentName = componentName;
    this.typeFileToBuild = "storie";
    return this;
  }
  build(): string {
    if (this.typeFileToBuild === "ts") {
      buildContentForTypescript(this.componentName);
    }
    if (this.typeFileToBuild === "ts") {
      buildContentForTest(this.componentName);
    }
    return buildContentForStories(this.componentName);
  }
}
