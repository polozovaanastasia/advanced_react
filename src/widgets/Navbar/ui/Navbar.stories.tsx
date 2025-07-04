import type { Meta, StoryObj } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator/StoreDecorator";
import { Navbar } from "./Navbar";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: "1",
                    username: "username",
                },
            },
        }),
    ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
