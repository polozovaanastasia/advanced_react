import { StateSchema } from "app/providers/storeProvider";
import { DeepPartial } from "app/types/utility/DeepPartial";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: "123" },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
