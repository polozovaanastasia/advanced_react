import { Decorator } from "@storybook/react";
import { ThemeProvider } from "app/providers/theme";
import { Theme } from "shared/config/themeConfig/themeConfig";

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme === "dark" ? Theme.DARK : Theme.LIGHT;

    return (
        <ThemeProvider>
            <div className={`app ${theme}`} style={{ width: "100vw" }}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
