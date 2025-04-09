import { useTheme } from "app/providers/theme";
import DarkThemeIcon from "shared/assets/icons/DarkThemeIcon.svg";
import LightThemeIcon from "shared/assets/icons/LightThemeIcon.svg";
import { Theme } from "shared/config/themeConfig/themeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import * as cls from "./ThemeSwitcher.module.scss";

type ThemeSwitcherProps = {};

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <UIButton
            className={classNames(cls.themeSwitcher, {}, [])}
            type={UIButtonType.ROUND}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
        </UIButton>
    );
};
