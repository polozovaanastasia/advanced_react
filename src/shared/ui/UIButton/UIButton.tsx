import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./UIButton.module.scss";

export enum UIButtonType {
    PRIMARY = "primary",
    OUTLINE = "outline",
    ROUND = "round",
}

export enum UIButtonSize {
    LG = "lg",
    MD = "md",
    S = "s",
}

type UIButtonProps = {
    type?: UIButtonType;
    size?: UIButtonSize;
    className?: string;
    children: React.ReactNode;
    onClick: () => void;

    "data-testid"?: string;
};

export const UIButton = ({
    type = UIButtonType.PRIMARY,
    size = UIButtonSize.MD,
    className,
    children,
    onClick,
    "data-testid": dataTestId,
}: UIButtonProps) => {
    const UIButtonClasses = classNames(cls["ui-button"], {}, [
        className,
        cls[`type-${type}`],
        cls[`size-${size}`],
    ]);

    return (
        <button
            data-testid={dataTestId}
            className={UIButtonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
