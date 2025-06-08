import type { Meta, StoryObj } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
