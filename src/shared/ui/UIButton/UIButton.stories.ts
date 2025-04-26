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
        // type: {
        //     control: "select",
        //     options: Object.values(UIButtonType),
        // },
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

export const Primary: Story = {
    args: {
        type: UIButtonType.PRIMARY,
        children: "Primary",
    },
};

export const Outline: Story = {
    args: {
        type: UIButtonType.OUTLINE,
        children: "Outline",
    },
};

export const Round: Story = {
    args: {
        type: UIButtonType.ROUND,
        children: "RD",
    },
};
