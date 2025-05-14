import { useDispatch, useSelector } from "react-redux";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/CounterSlice";
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
        <div className={cls.counter}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 className={cls.title}>value = {counterValue}</h1>
            <div className={cls["buttons-area"]}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <UIButton onClick={increment}>increment</UIButton>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <UIButton onClick={decrement}>decrement</UIButton>
            </div>
        </div>
    );
};
