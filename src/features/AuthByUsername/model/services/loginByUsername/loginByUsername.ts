import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";

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
>(
    "login/loginByUsername",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post<User>(
                "http://localhost:8000/login",
                {
                    username,
                    password,
                }
            );
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            let message = "Неизвестная ошибка";

            if (err instanceof Error) {
                message = err.message;
            }

            return rejectWithValue(message);
        }
    }
);
