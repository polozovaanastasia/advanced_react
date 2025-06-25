import { Reducer } from "@reduxjs/toolkit";
import { StoryContext, StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/storeProvider";
import { StateSchemaKey } from "app/providers/storeProvider/config/StateSchema";
import { loginReducer } from "features/AuthByUsername";

const dynamicReducers: Partial<Record<StateSchemaKey, Reducer>> = {
    loginForm: loginReducer,
};
export const StoreDecorator =
    (state: Partial<StateSchema>) =>
    (Story: StoryFn, context: StoryContext) => {
        return (
            <StoreProvider
                initialState={state as StateSchema}
                dynamicReducers={dynamicReducers}
            >
                {Story(context.args, context)}
            </StoreProvider>
        );
    };
