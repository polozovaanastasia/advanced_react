import { useTheme } from "app/providers/theme";
import DarkThemeIcon from "shared/assets/icons/DarkThemeIcon.svg";
import LightThemeIcon from "shared/assets/icons/LightThemeIcon.svg";
import { Theme } from "shared/config/themeConfig/themeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import * as cls from "./ThemeSwitcher.module.scss";

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <UIButton
            className={classNames(cls["theme-switcher"], {}, [className])}
            type={UIButtonType.ROUND_INVERTED}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
        </UIButton>
    );
};
