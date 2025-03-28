import { CounterPage } from "pages/counterPage";
import { MainPage } from "pages/mainPage";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { Theme } from "./providers/ThemeProvider/lib/themeContext";
import "./styles/index.scss";

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
                    <Route path="/" element={<MainPage />} />
                    <Route path={"/counter"} element={<CounterPage />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
