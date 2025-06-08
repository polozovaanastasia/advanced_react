import type { Meta, StoryObj } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator/StoreDecorator";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    parameters: {
        actions: { argTypesRegex: "^on.*" },
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "admin",
                isLoading: false,
            },
        }),
    ],
};
export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "123",
                password: "123",
                isLoading: false,
                error: "ERROR",
            },
        }),
    ],
};
export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "",
                password: "",
                isLoading: true,
            },
        }),
    ],
};
