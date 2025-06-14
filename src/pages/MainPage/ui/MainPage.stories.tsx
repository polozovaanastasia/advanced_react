import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
