import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Theme } from "./providers/theme/lib/themeContext";
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
            <AppRouter />
        </div>
    );
}

export default App;
