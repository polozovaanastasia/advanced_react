import { lazy } from "react";

export const AboutPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error - временно, чтобы видеть лоадер.
            setTimeout(() => resolve(import("./AboutPage")), 1500);
        })
);
