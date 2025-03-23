import { useState } from "react";
import "./counter.scss";

export function Counter() {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="counter">
            <h1>{count}</h1>
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
    );
}
