import { StoryContext, StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/storeProvider";

export const StoreDecorator =
    (state: Partial<StateSchema>) =>
    (Story: StoryFn, context: StoryContext) => {
        console.log("StoreDecorator активен");
        return (
            <StoreProvider initialState={state as StateSchema}>
                {Story(context.args, context)}
            </StoreProvider>
        );
    };
