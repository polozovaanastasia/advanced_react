import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./UILoader.module.scss";

type UILoaderProps = {
    className?: string;
};

export const UILoader = ({ className }: UILoaderProps) => {
    return (
        <div className={classNames(cls["ui-loader"], {}, [className])}>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
            <div className={cls.circle}></div>
        </div>
    );
};
