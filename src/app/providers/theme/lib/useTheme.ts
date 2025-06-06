import { useContext } from "react";
import { Theme } from "shared/config/themeConfig/themeConfig";
import { LOCAL_STORAGE_THEME_KEY } from "shared/const/localstorage";
import { ThemeContext } from "./themeContext";

type UseThemeReturn = {
    theme: Theme;
    toggleTheme: () => void;
};

export const useTheme = (): UseThemeReturn => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
};
