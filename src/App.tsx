import { CounterPageLazy } from "@pages/counterPage/counterPage.lazy";
import { MainPageLazy } from "@pages/mainPage/mainPage.lazy";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";

function App() {
    return (
        <div className="app">
            <Link to="/">Main</Link>
            <Link to="counter">Counter</Link>
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
