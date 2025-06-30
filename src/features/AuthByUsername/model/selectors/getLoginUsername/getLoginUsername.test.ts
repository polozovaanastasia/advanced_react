import { StateSchema } from "app/providers/storeProvider";
import { DeepPartial } from "app/types/utility/DeepPartial";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: "Name" },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("Name");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
