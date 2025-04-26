/* eslint-disable react/display-name */

import { Decorator } from "@storybook/react";
import { Theme } from "shared/config/themeConfig/themeConfig";

const appStyle = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--aria-color)",
};

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (Story) => (
        <div className={`app ${theme}`} style={appStyle}>
            <div>
                <Story />
            </div>
        </div>
    );
