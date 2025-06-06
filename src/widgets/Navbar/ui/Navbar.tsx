import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "shared/assets/icons/LogoutIcon.svg";
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
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <div
            data-testid="navbar"
            className={classNames(cls.navbar, {}, [className])}
        >
            <ThemeSwitcher className={cls["navbar__theme-switcher"]} />
            <LangSwitcher />

            {authData ? (
                <UIButton type={UIButtonType.ROUND_INVERTED} onClick={onLogout}>
                    <LogoutIcon />
                </UIButton>
            ) : (
                <>
                    <UIButton
                        type={UIButtonType.ROUND_INVERTED}
                        onClick={onShowAuthModal}
                    >
                        <UserIcon />
                    </UIButton>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseAuthModal}
                    />
                </>
            )}
        </div>
    );
};
