import { CounterPageLazy } from "@pages/counterPage/counterPage.lazy";
import { MainPageLazy } from "@pages/mainPage/mainPage.lazy";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { useTheme } from "./hooks/useTheme";
import "./styles/index.scss";
import { Theme } from "./theme/themeContext";

function App() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Main</Link>
            <Link to="counter">Counter</Link>
            <br />
            <button onClick={toggleTheme}>
                {theme === Theme.LIGHT
                    ? "Включить темную тему"
                    : "Включить светлую тему"}
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route
                        path={"/counter"}
                        element={<CounterPageLazy />}
                    ></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
