import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "shared/ui/UIButton/UIButton";
import { Navbar } from "widgets/Navbar/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

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
                        <div className="buttons-area">
                            <UIButton onClick={() => {}} size={UIButtonSize.S}>
                                {t("translation:save")}
                            </UIButton>
                            <UIButton onClick={() => {}}>
                                {t("translation:save")}
                            </UIButton>
                            <UIButton onClick={() => {}} size={UIButtonSize.LG}>
                                {t("translation:save")}
                            </UIButton>

                            <UIButton
                                onClick={() => {}}
                                type={UIButtonType.OUTLINE}
                                size={UIButtonSize.S}
                            >
                                {t("translation:save")}
                            </UIButton>
                            <UIButton
                                onClick={() => {}}
                                type={UIButtonType.OUTLINE}
                            >
                                {t("translation:save")}
                            </UIButton>
                            <UIButton
                                onClick={() => {}}
                                type={UIButtonType.OUTLINE}
                                size={UIButtonSize.LG}
                            >
                                {t("translation:save")}
                            </UIButton>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default App;
