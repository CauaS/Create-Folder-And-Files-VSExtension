import { window } from "vscode";
export default async function getComponentNameFromView(): Promise<
  string | undefined
> {
  const resultFromInput = await window.showInputBox({
    placeHolder: "ComponentName",
    title: "Component Name",
  });
  return resultFromInput;
}
