import { lazy } from "react";

export const CounterPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // чтобы видеть лоадер
            setTimeout(() => resolve(import("./CounterPage")), 1500);
        })
);
