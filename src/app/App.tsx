import { classNames } from "shared/lib/classNames/classNames";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "shared/ui/UIButton/UIButton";
import { UILink } from "shared/ui/UILink/UILink";
import { Navbar } from "widgets/Navbar/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();
    return (
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
                    <UILink to={"https://www.google.com/"}> Google </UILink>
                    <AppRouter />
                    <div className="buttons-area">
                        <UIButton onClick={() => {}} size={UIButtonSize.S}>
                            Сохранить
                        </UIButton>
                        <UIButton onClick={() => {}}>Сохранить</UIButton>
                        <UIButton onClick={() => {}} size={UIButtonSize.LG}>
                            Сохранить
                        </UIButton>

                        <UIButton
                            onClick={() => {}}
                            type={UIButtonType.OUTLINE}
                            size={UIButtonSize.S}
                        >
                            Сохранить
                        </UIButton>
                        <UIButton
                            onClick={() => {}}
                            type={UIButtonType.OUTLINE}
                        >
                            Сохранить
                        </UIButton>
                        <UIButton
                            onClick={() => {}}
                            type={UIButtonType.OUTLINE}
                            size={UIButtonSize.LG}
                        >
                            Сохранить
                        </UIButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
