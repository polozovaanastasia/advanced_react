import { useState } from "react";
import { useLocation } from "react-router-dom";
import HamburgerIcon from "shared/assets/icons/HamburgerIcon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import { UILink } from "shared/ui/UILink/UILink";
import * as cls from "./Sidebar.module.scss";

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const location = useLocation();

    const onToggle = () => {
        setCollapsed((last) => !last);
    };

    return (
        <div
            className={classNames(
                cls.sidebar,
                { [cls["sidebar_collapsed"]]: collapsed },
                [className]
            )}
        >
            <div className={cls["header"]}>
                <UIButton
                    className={cls["sidebar-btn"]}
                    type={UIButtonType.ROUND}
                    onClick={onToggle}
                >
                    <HamburgerIcon />
                </UIButton>
                <h1 className={cls.title}>APP</h1>
            </div>
            <div className={cls.links}>
                <UILink
                    to="/"
                    className={classNames("sidebar__link", {
                        [cls.active]: location.pathname === "/",
                    })}
                >
                    Main
                </UILink>
                <UILink
                    to="/counter"
                    className={classNames("sidebar__link", {
                        [cls.active]: location.pathname === "/counter",
                    })}
                >
                    Counter
                </UILink>
            </div>
            <div className={cls.footer}></div>
        </div>
    );
};
