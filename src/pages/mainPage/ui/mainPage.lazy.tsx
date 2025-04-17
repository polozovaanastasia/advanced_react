import { lazy } from "react";

export const MainPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // чтобы видеть лоадер
            setTimeout(() => resolve(import("./MainPage")), 1500);
        })
);
