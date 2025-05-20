import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import UserIcon from "shared/assets/icons/UserIcon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as cls from "./Navbar.module.scss";

type NavbarProps = {
    className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div
            data-testid="navbar"
            className={classNames(cls.navbar, {}, [className])}
        >
            <ThemeSwitcher className={cls["navbar__theme-switcher"]} />
            <LangSwitcher />
            <UIButton
                type={UIButtonType.ROUND_INVERTED}
                onClick={onShowAuthModal}
            >
                <UserIcon />
            </UIButton>
            <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
        </div>
    );
};
