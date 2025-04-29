import { useEffect, useMemo, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from "shared/config/themeConfig/themeConfig";
import { ThemeContext } from "../lib/themeContext";

type ThemeProviderType = {
    initialTheme?: Theme;
    children: React.ReactNode;
};

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ initialTheme, children }: ThemeProviderType) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

    useEffect(() => {
        if (initialTheme) {
            setTheme(initialTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, initialTheme);
        }
    }, [initialTheme]);

    const defaultProps = useMemo(
        () => ({ theme: theme, setTheme: setTheme }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
