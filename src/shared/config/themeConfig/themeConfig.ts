export enum Theme {
    DARK = "app_dark_theme",
    LIGHT = "app_light_theme",
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
