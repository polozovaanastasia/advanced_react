import { useDispatch, useSelector } from "react-redux";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import * as cls from "./Counter.module.scss";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter" className={cls.counter}>
            <h1 data-testid="counter-title" className={cls.title}>
                {counterValue}
            </h1>
            <div className={cls["buttons-area"]}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <UIButton data-testid="increment-btn" onClick={increment}>
                    increment
                </UIButton>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <UIButton data-testid="decrement-btn" onClick={decrement}>
                    decrement
                </UIButton>
            </div>
        </div>
    );
};
