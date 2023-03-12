"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
async function getComponentNameFromView() {
    const resultFromInput = await vscode_1.window.showInputBox({
        placeHolder: "ComponentName",
        title: "Component Name",
    });
    return resultFromInput;
}
exports.default = getComponentNameFromView;
//# sourceMappingURL=getComponentNameFromView.js.map