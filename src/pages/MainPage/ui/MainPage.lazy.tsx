import { lazy } from "react";

export const MainPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error - временно, чтобы видеть лоадер.
            setTimeout(() => resolve(import("./MainPage")), 1500);
        })
);
