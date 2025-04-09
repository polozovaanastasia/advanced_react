import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { UILink } from "shared/ui/UILink/UILink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as cls from "./Navbar.module.scss";

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const location = useLocation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <h1 className={cls.title}>TV APP</h1>
            <div className={cls.links}>
                <UILink
                    to="/"
                    className={classNames("navbar__link", {
                        [cls.active]: location.pathname === "/",
                    })}
                >
                    Main
                </UILink>
                <UILink
                    to="/counter"
                    className={classNames("navbar__link", {
                        [cls.active]: location.pathname === "/counter",
                    })}
                >
                    Counter
                </UILink>
            </div>
            <div className={cls.footer}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
