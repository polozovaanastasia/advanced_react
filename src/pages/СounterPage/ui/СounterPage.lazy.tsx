import { lazy } from "react";

export const CounterPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error - временно, чтобы видеть лоадер.
            setTimeout(() => resolve(import("./СounterPage")), 1500);
        })
);
