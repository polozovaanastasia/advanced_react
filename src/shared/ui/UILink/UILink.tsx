import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./UILink.module.scss";

type UILinkProps = LinkProps;

export const UILink = ({
    to,
    children,
    className,
    ...otherProps
}: UILinkProps) => {
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
