import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
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
                <AppLink
                    to="/"
                    className={classNames("navbar__link", {
                        [cls.active]: location.pathname === "/",
                    })}
                >
                    Main
                </AppLink>
                <AppLink
                    to="/counter"
                    className={classNames("navbar__link", {
                        [cls.active]: location.pathname === "/counter",
                    })}
                >
                    Counter
                </AppLink>
            </div>
        </div>
    );
};
