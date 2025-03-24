import { createContext } from "react";

export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.LIGHT,
    setTheme: () => {
        throw new Error("setTheme was called outside of ThemeProvider");
    },
});
export const LOCAL_STORAGE_THEME_KEY = "theme";
