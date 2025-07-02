jest.mock("axios");
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/storeProvider";
import axios from "axios";
import { userActions } from "entities/User";
import { loginByUsername } from "./loginByUsername";

const mockedAxios = jest.mocked(axios);

describe("getLoginPassword", () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test("login success", async () => {
        const userData = { username: "Name", id: "123" };
        mockedAxios.post.mockResolvedValue({
            data: userData,
        });
        const thunkAC = loginByUsername({
            username: "admin",
            password: "admin",
        });
        const action = await thunkAC(dispatch, getState, undefined);

        // console.log(action);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe("fulfilled");
        expect(action.payload).toEqual(userData);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userData)
        );
    });

    test("login error", async () => {
        mockedAxios.post.mockRejectedValue({ status: 403 });

        const thunkAC = loginByUsername({
            username: "admin",
            password: "admin",
        });
        const action = await thunkAC(dispatch, getState, undefined);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe("rejected");
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});
