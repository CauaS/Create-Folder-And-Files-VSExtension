"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContentForStories = exports.buildContentForTest = exports.buildContentForTypescript = void 0;
const buildContentForTypescript = (componentName) => {
    return `import React from "react"

export interface ${componentName}Props {

}

export const ${componentName}: React.FC<${componentName}Props> = ({...}) => {
    return <></>
}
`;
};
exports.buildContentForTypescript = buildContentForTypescript;
const buildContentForStories = (componentName) => {
    return `import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ${componentName}, ${componentName}Props } from "./${componentName}";

export default {
    title: "${componentName}",
    component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (
    args: ${componentName}Props
) => {
    return (
    <>
        <${componentName} {...args} />
    </>
    );
};
export const ${componentName}Story = Template.bind({});
${componentName}Story.args = {...};
`;
};
exports.buildContentForStories = buildContentForStories;
const buildContentForTest = (componentName) => {
    return `import { composeStory } from "@storybook/testing-react";
import { screen, render } from "@testing-library/react";
import Meta, {
    ${componentName}Story,
} from "./${componentName}.stories";

const ${componentName}StoryBook = composeStory(
    ${componentName}Story,
    Meta
);

describe("${componentName} Suite Test", () => {
    it("Should match snapshot", () => {
    const component = render(
        <${componentName}StoryBook />
    );
    expect(component).toMatchSnapshot();
    });
});
`;
};
exports.buildContentForTest = buildContentForTest;
//# sourceMappingURL=Contents.js.map