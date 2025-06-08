import type { Meta, StoryObj } from "@storybook/react";

import { UIButton, UIButtonType } from "./UIButton";

const meta: Meta<typeof UIButton> = {
    title: "shared/UIButton",
    component: UIButton,
    tags: ["autodocs"],
    parameters: {
        actions: { argTypesRegex: "^on.*" },
        layout: "fullscreen",
        viewport: {
            defaultViewport: "iphone6",
            viewports: {
                iphone6: {
                    name: "iPhone 6",
                    styles: {
                        width: "375px",
                        height: "667px",
                    },
                    type: "mobile",
                },
                ipad: {
                    name: "iPad",
                    styles: {
                        width: "768px",
                        height: "1024px",
                    },
                    type: "tablet",
                },
            },
        },
        // controls: { include: ["size", "type"] },
    },
    // argTypes: {
    //     size: {
    //         control: "select",
    //         options: Object.values(UIButtonSize),
    //     },
    //     children: {
    //         control: "text",
    //     },
    // },
    // args: { onClick: () => alert("Button clicked!"), children: "Button" },
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
