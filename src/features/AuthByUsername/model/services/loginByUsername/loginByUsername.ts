import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "i18next";
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
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        // eslint-disable-next-line
        console.log("Error: ", error);
        return thunkAPI.rejectWithValue(i18n.t("authIncorrectError"));
    }
});
// "authIncorrectError": "Incorrect username or password."
// "authIncorrectError": "Некорректное имя пользователя или пароль."
