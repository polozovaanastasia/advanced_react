import { ReducersMapObject } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

type StoreProviderProps = {
    children: React.ReactNode;
    initialState?: StateSchema;
    dynamicReducers?: Partial<ReducersMapObject<StateSchema>>;
};

export const StoreProvider = ({
    children,
    initialState,
    dynamicReducers,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState, dynamicReducers);

    return <Provider store={store}>{children}</Provider>;
};
