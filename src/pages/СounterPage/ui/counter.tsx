import { useState } from "react";
import * as cls from "./counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className={cls.counter}>
            <h1 className={cls.title}>{count}</h1>
            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setCount(count - 1);
                    }}
                >
                    -
                </button>
            </div>
        </div>
    );
};
