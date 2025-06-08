import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";

const meta = {
    title: "widgets/LangSwitcher",
    component: LangSwitcher,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
