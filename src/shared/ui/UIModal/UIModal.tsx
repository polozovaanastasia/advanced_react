import { useEffect, useState } from "react";
import CrossIcon from "shared/assets/icons/CrossIcon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { UIButton, UIButtonSize, UIButtonType } from "../UIButton/UIButton";
import * as cls from "./UIModal.module.scss";

export enum UIModalSize {
    LG = "lg",
    MD = "md",
    S = "s",
}

type UIModalProps = {
    isOpen: boolean;
    size?: UIModalSize;
    withCloseButton?: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
};

type UIModalSectionPropsType = {
    children: React.ReactNode;
    className?: string;
};

const ANIMATION_DELAY = 200;

export const UIModal = ({
    isOpen,
    size,
    withCloseButton = true,
    onClose,
    children,
    className,
}: UIModalProps) => {
    if (!isOpen) return null;

    const [isOpening, setIsOpening] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onCloseHandler();
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        const timer = setTimeout(() => {
            setIsOpening(false);
            window.removeEventListener("keydown", onKeyDown);
        }, ANIMATION_DELAY);

        return () => clearTimeout(timer);
    }, []);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseHandler = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, ANIMATION_DELAY);
    };

    const UIModalClasses = classNames(
        cls["ui-modal"],
        {
            [cls["ui-modal_is-opening"]]: isOpening,
            [cls["ui-modal_is-closing"]]: isClosing,
        },
        [className, cls[`size-${size}`]]
    );
    const modal = (
        <div className={UIModalClasses}>
            <div
                className={classNames(cls["ui-modal__overlay"])}
                onClick={onCloseHandler}
            >
                <div
                    className={classNames(cls["ui-modal__content"])}
                    onClick={onContentClick}
                >
                    {withCloseButton && (
                        <UIButton
                            className={classNames(cls["ui-modal__close-btn"])}
                            type={UIButtonType.ICON}
                            size={UIButtonSize.S}
                            onClick={onCloseHandler}
                        >
                            <CrossIcon />
                        </UIButton>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );

    const modalsRoot = document.getElementById("modal-root");
    if (!modalsRoot) return null;

    return <Portal element={modalsRoot}>{modal}</Portal>;
};

const UIModalHeader = ({ className, children }: UIModalSectionPropsType) => {
    return (
        <div className={classNames(cls["ui-modal__header"], {}, [className])}>
            {children}
        </div>
    );
};
UIModal.Header = UIModalHeader;

const UIModalBody = ({ className, children }: UIModalSectionPropsType) => {
    return (
        <div className={classNames(cls["ui-modal__body"], {}, [className])}>
            {children}
        </div>
    );
};
UIModal.Body = UIModalBody;

const UIModalFooter = ({ className, children }: UIModalSectionPropsType) => {
    return (
        <div className={classNames(cls["ui-modal__footer"], {}, [className])}>
            {children}
        </div>
    );
};
UIModal.Footer = UIModalFooter;
