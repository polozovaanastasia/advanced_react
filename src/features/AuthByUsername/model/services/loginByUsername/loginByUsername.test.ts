jest.mock("axios");
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/storeProvider";
import axios from "axios";
import { loginByUsername } from "./loginByUsername";

const mockedAxios = jest.mocked(axios);

describe("getLoginPassword", () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test("", async () => {
        mockedAxios.post.mockResolvedValue({
            data: { username: "Name", id: "123" },
        });
        const action = loginByUsername({
            username: "admin",
            password: "admin",
        });
        const result = await action(dispatch, getState, undefined);

        console.log(result);
    });
});
