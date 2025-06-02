import { CounterSchema } from "entities/Counter/model/types/CounterSchema";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername/model/types/LoginSchema";

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
};
