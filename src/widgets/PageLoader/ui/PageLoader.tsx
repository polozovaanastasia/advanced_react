import { classNames } from "shared/lib/classNames/classNames";
import { UILoader } from "shared/ui/UILoader/UILoader";
import * as cls from "./PageLoader.module.scss";

type PageLoaderProps = {
    className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls["page-loader"], {}, [className])}>
            <UILoader />
        </div>
    );
};
