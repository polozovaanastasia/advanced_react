import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
};
