import type { Meta, StoryObj } from "@storybook/react";
import { UIInput, UIInputVariant } from "./UIInput";

const meta = {
    title: "shared/UIInput",
    component: UIInput,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        onChange: () => {},
    },
    argTypes: {
        variant: {
            control: "select",
            options: Object.values(UIInputVariant),
        },
    },
} satisfies Meta<typeof UIInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWithoutClear: Story = {
    args: {
        value: "Hello",
        variant: UIInputVariant.DEFAULT,
    },
};

export const DefaultWithClear: Story = {
    args: {
        value: "Hello",
        variant: UIInputVariant.DEFAULT,
        allowClear: true,
    },
};
