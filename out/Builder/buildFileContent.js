"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileContentBuilder = void 0;
const Contents_1 = require("./Contents/Contents");
class FileContentBuilder {
    constructor() {
        this.componentName = "";
        this.typeFileToBuild = "";
    }
    forTypescript(componentName) {
        this.componentName = componentName;
        this.typeFileToBuild = "ts";
        return this;
    }
    forTest(componentName) {
        this.componentName = componentName;
        this.typeFileToBuild = "tst";
        return this;
    }
    forStories(componentName) {
        this.componentName = componentName;
        this.typeFileToBuild = "storie";
        return this;
    }
    build() {
        if (this.typeFileToBuild === "ts") {
            (0, Contents_1.buildContentForTypescript)(this.componentName);
        }
        if (this.typeFileToBuild === "ts") {
            (0, Contents_1.buildContentForTest)(this.componentName);
        }
        return (0, Contents_1.buildContentForStories)(this.componentName);
    }
}
exports.FileContentBuilder = FileContentBuilder;
//# sourceMappingURL=buildFileContent.js.map