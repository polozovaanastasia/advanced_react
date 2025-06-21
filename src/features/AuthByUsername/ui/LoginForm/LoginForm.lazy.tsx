import { lazy } from "react";

export const LoginFormLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error - временно, чтобы видеть лоадер.
            setTimeout(() => resolve(import("./LoginForm")), 15000);
        })
);
