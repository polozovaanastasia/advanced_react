import { CounterPageLazy } from "@pages/counterPage/counterPage.lazy";
import { MainPageLazy } from "@pages/mainPage/mainPage.lazy";
import { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "./theme/themeContext";

function App() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleThemes = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return (
        <div className={`app ${theme}`}>
            <Link to="/">Main</Link>
            <Link to="counter">Counter</Link>
            <br />
            <button onClick={toggleThemes}>
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
