import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
