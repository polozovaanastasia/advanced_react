/* eslint-disable react/display-name */

import { Decorator } from "@storybook/react";
import { Theme } from "shared/config/themeConfig/themeConfig";

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (Story) => (
        <div className={`app ${theme}`} style={{ width: "100vw" }}>
            <Story />
        </div>
    );
