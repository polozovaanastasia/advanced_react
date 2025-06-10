import type { Meta, StoryObj } from "@storybook/react";

import { UIButton, UIButtonSize, UIButtonType } from "./UIButton";

const meta: Meta<typeof UIButton> = {
    title: "shared/UIButton",
    component: UIButton,
    tags: ["autodocs"],
    parameters: {
        actions: { argTypesRegex: "^on.*" },
        layout: "fullscreen",
    },
    argTypes: {
        size: {
            control: "select",
            options: Object.values(UIButtonSize),
        },
        children: {
            control: "text",
        },
    },
};

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

export const RoundInverted: Story = {
    args: {
        type: UIButtonType.ROUND_INVERTED,
        children: "RD",
    },
};
