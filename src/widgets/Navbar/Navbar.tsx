import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as cls from "./Navbar.module.scss";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <ThemeSwitcher className={cls["navbar__theme-switcher"]} />
        </div>
    );
};
