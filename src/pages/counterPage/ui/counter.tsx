import { useState } from "react";
import * as styles from "./counter.module.scss";

export function Counter() {
    const [count, setCount] = useState<number>(0);
    return (
        <div className={styles.counter}>
            <h1 className={styles.green}>{count}</h1>
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
