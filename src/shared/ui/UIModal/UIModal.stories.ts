import type { Meta, StoryObj } from "@storybook/react";
import { UIModal, UIModalSize } from "./UIModal";

const meta = {
    title: "shared/UIModal",
    component: UIModal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        // type: {
        //     control: "select",
        //     options: Object.values(UIButtonType),
        // },
        size: {
            control: "select",
            options: Object.values(UIModalSize),
        },
        children: {
            control: "text",
        },
    },
    // args: { onClick: () => alert("Button clicked!"), children: "Button" },
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
