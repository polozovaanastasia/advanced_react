import type { Meta, StoryObj } from "@storybook/react";

import { UIButton, UIButtonSize, UIButtonType } from "./UIButton";

import "../../../app/styles/index.scss";

const meta = {
    title: "shared/UIButton",
    component: UIButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: Object.values(UIButtonType),
        },
        size: {
            control: "select",
            options: Object.values(UIButtonSize),
        },
        children: {
            control: "text",
        },
    },
    args: { onClick: () => alert("Button clicked!"), children: "Button" },
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
    args: {
        type: UIButtonType.PRIMARY,
        size: UIButtonSize.MD,
        children: "Primary Button",
    },
};

// export const Secondary: Story = {
//     args: {
//         label: "Button",
//     },
// };

// export const Large: Story = {
//     args: {
//         size: "large",
//         label: "Button",
//     },
// };

// export const Small: Story = {
//     args: {
//         size: "small",
//         label: "Button",
//     },
// };
