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
        setError(state, action: PayloadAction<string | undefined>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
