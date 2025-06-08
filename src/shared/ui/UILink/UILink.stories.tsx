import type { Meta, StoryObj } from "@storybook/react";

import { UILink } from "./UILink";

const meta = {
    title: "shared/UILink",
    component: UILink,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof UILink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        to: "/",
        children: "Go",
    },
};
