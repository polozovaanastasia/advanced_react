import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";
import { User, UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthDate(state, action: PayloadAction<User>) {
            state.authDate = action.payload;
        },
        initAuthDate(state) {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                state.authDate = JSON.parse(user);
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
