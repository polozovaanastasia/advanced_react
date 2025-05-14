import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
    test("should return value", () => {
        const state = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toBe(10);
    });
});
