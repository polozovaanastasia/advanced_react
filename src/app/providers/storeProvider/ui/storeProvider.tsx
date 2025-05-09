import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

type StoreProviderProps = {
    children: React.ReactNode;
};

const store = createReduxStore();

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
