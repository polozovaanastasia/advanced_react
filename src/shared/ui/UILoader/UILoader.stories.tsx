import type { Meta, StoryObj } from "@storybook/react";

import { UILoader } from "./UILoader";

const meta = {
    title: "shared/UILoader",
    component: UILoader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof UILoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
