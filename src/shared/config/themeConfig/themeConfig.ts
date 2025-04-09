export enum Theme {
    DARK = "dark",
    LIGHT = "light",
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const LOCAL_STORAGE_THEME_KEY = "theme";
