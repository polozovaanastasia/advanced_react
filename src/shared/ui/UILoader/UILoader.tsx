import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./UILoader.module.scss";

export enum UILoaderSize {
    // LG = "lg",
    MD = "md",
    S = "s",
}

type UILoaderProps = {
    size?: UILoaderSize;
    className?: string;
};

export const UILoader = ({
    size = UILoaderSize.MD,
    className,
}: UILoaderProps) => {
    const UILoaderClasses = classNames(cls["ui-loader"], {}, [
        className,
        cls[`ui-loader_size-${size}`],
    ]);

    return (
        <div className={UILoaderClasses}>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
        </div>
    );
};
