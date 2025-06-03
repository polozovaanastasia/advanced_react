import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, () => {})
            .addCase(loginByUsername.fulfilled, () => {})
            .addCase(loginByUsername.rejected, () => {});
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
