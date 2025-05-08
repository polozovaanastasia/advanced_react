import { Decorator } from "@storybook/react";
import { ThemeProvider } from "app/providers/theme";

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`} style={{ width: "100vw" }}>
                <Story />
                <div id="modal-root" />
            </div>
        </ThemeProvider>
    );
};
