import { createContext } from "react";
import { Theme, ThemeContextType } from "shared/config/themeConfig/themeConfig";

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.LIGHT,
    setTheme: () => {
        throw new Error("setTheme was called outside of ThemeProvider");
    },
});
