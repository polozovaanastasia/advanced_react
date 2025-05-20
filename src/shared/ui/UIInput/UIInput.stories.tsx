import type { Meta, StoryObj } from "@storybook/react";
import { UIInput, UIInputVariant } from "./UIInput";

const meta = {
    title: "shared/UIInput",
    component: UIInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
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
        value: "",
        variant: UIInputVariant.DEFAULT,
        onChange: () => {},
    },
};

export const DefaultWithClear: Story = {
    args: {
        value: "",
        variant: UIInputVariant.DEFAULT,
        allowClear: true,
        onClear: () => {},
        onChange: () => {},
    },
};
