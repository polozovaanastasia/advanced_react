import { useMemo, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from "shared/config/themeConfig/themeConfig";
import { ThemeContext } from "../lib/themeContext";

type ThemeProviderType = {
    children: React.ReactNode;
};

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: ThemeProviderType) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

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
