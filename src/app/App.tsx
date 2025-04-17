import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classNames("app", {}, [theme])}>
                <Sidebar />
                <div className="main" style={{ width: "100%" }}>
                    <Navbar />
                    <div
                        className="content"
                        style={{
                            padding: "20px 15px",
                            height: "calc(100vh - 75px)",
                        }}
                    >
                        <AppRouter />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default App;
