import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
