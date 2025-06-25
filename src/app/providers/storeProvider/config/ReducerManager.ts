import {
    Action,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema";

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema | undefined, action: Action) => {
            if (!state) {
                return combinedReducer(undefined, action);
            }
            let newState = state;
            if (keysToRemove.length > 0) {
                newState = { ...newState };
                keysToRemove.forEach((key) => {
                    delete newState[key];
                });
                keysToRemove = [];
            }

            return combinedReducer(
                newState as ReturnType<typeof combinedReducer>,
                action
            );
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
