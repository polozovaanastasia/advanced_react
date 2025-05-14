import { CounterSchema } from "../types/CounterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
    test("should work width empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });

    test("increment action", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test("decrement action", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
});
