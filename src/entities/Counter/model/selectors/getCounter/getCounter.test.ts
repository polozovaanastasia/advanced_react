import { StateSchema } from "app/providers/storeProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
    test("should return counter value", () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
            user: {},
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
