import { lazy } from "react";

export const CounterPageLazy = lazy(
    () => import("@pages/counterPage/counterPage")
);
