import type { Meta, StoryObj } from "@storybook/react";

import { UILoader, UILoaderSize } from "./UILoader";

const meta = {
    title: "shared/UILoader",
    component: UILoader,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        size: {
            control: "select",
            options: Object.values(UILoaderSize),
        },
    },
} satisfies Meta<typeof UILoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
