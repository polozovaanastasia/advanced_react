import type { Meta, StoryObj } from "@storybook/react";
import { UIModal, UIModalSize } from "./UIModal";

const meta = {
    title: "shared/UIModal",
    component: UIModal,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        size: {
            control: "select",
            options: Object.values(UIModalSize),
        },
    },
} satisfies Meta<typeof UIModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        children: "UIModal",
    },
};
