import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "app/providers/theme/lib/themeContext";
import { useMemo, useState } from "react";

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
