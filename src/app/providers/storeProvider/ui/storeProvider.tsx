import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

type StoreProviderProps = {
    children: React.ReactNode;
    initialState?: StateSchema;
};

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
