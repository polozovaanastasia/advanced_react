import { StateSchema } from "app/providers/storeProvider";
import { DeepPartial } from "app/types/utility/DeepPartial";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
    test("should return error message", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: "Error message" },
        };
        expect(getLoginError(state as StateSchema)).toEqual("Error message");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
