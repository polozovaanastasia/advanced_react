import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18nForStorybook";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

type loginByUsernameProps = {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    {
        rejectValue: string;
    }
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
    try {
        const response = await axios.post<User>("http://localhost:8000/login", {
            username,
            password,
        });

        localStorage.setItem(
            LOCAL_STORAGE_USER_KEY,
            JSON.stringify(response.data)
        );
        thunkAPI.dispatch(userActions.setAuthDate(response.data));

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(i18n.t("authIncorrectError"));
    }
});
