import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "app/providers/storeProvider/config/StateSchema";
import { AppDispatch } from "app/providers/storeProvider/config/store";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

type DynamicModuleLoaderProps = {
    reducers: ReducersList;
    children: React.ReactNode;
};

export const DynamicModuleLoader = ({
    reducers,
    children,
}: DynamicModuleLoaderProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach((entry) => {
            const [name, reducer] = entry as ReducersListEntry;
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            Object.entries(reducers).forEach((entry) => {
                const [name] = entry as ReducersListEntry;
                store.reducerManager.remove(name);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
    }, []);
    return <> {children} </>;
};
