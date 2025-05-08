import { useTranslation } from "react-i18next";
import { BugButton } from "shared/ui/BugButton/BugButton";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "shared/ui/UIButton/UIButton";

const MainPage = () => {
    const { t } = useTranslation("main");

    return (
        <div>
            <h1>{t("main:mainPage")}</h1>
            <h2>{t("main:welcome")}</h2>

            <div className="buttons-area">
                <BugButton />
            </div>

            <div className="buttons-area">
                <UIButton onClick={() => {}} size={UIButtonSize.S}>
                    {t("translation:save")}
                </UIButton>
                <UIButton onClick={() => {}}>{t("translation:save")}</UIButton>
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
                <UIButton onClick={() => {}} type={UIButtonType.OUTLINE}>
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
    );
};

export default MainPage;
