import { StateSchema } from "app/providers/storeProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
    test("should return value", () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toBe(10);
    });
});
