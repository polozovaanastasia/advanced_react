import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/storeProvider/config/StateSchema";
import { useEffect } from "react";
import { useStore } from "react-redux";

type DynamicModuleLoaderProps = {
    name: StateSchemaKey;
    reducer: Reducer;
    children: React.ReactNode;
};

export const DynamicModuleLoader = ({
    name,
    reducer,
    children,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        store.reducerManager.add(name, reducer);
        return () => {
            store.reducerManager.remove(name);
        };
    }, []);
    return <>{children}</>;
};
