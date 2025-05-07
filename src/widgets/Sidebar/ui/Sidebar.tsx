import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import CounterIcon from "shared/assets/icons/CounterIcon.svg";
import HamburgerIcon from "shared/assets/icons/HamburgerIcon.svg";
import HomeIcon from "shared/assets/icons/HomeIcon.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import { UILink } from "shared/ui/UILink/UILink";
import * as cls from "./Sidebar.module.scss";

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation(["main", "counter"]);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const location = useLocation();

    const onToggle = () => {
        setCollapsed((last) => !last);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.sidebar,
                { [cls["sidebar_collapsed"]]: collapsed },
                [className]
            )}
        >
            <div className={cls["header"]}>
                <UIButton
                    data-testid="sidebar-toggle"
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
                    to={RoutePath.main}
                    className={classNames("sidebar__link", {
                        [cls.active]: location.pathname === RoutePath.main,
                    })}
                >
                    <HomeIcon />
                    {t("main:mainPage")}
                </UILink>
                <UILink
                    to={RoutePath.counter}
                    className={classNames("sidebar__link", {
                        [cls.active]: location.pathname === RoutePath.counter,
                    })}
                >
                    <CounterIcon />
                    {t("counter:counter")}
                </UILink>
            </div>
            <div className={cls.footer}></div>
        </div>
    );
};
