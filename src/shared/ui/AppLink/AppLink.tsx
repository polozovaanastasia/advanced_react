import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./AppLink.module.scss";

type AppLinkProps = LinkProps;

export const AppLink = ({
    to,
    children,
    className,
    ...otherProps
}: AppLinkProps) => {
    return (
        <Link
            to={to}
            className={classNames(cls["link"], {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
