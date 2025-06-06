import { useTranslation } from "react-i18next";
import IdCardIcon from "shared/assets/icons/IdCardIcon.svg";
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
                <UIButton
                    onClick={() => {
                        console.log("click btn1");
                    }}
                    size={UIButtonSize.S}
                    disabled={true}
                >
                    {t("translation:save")}
                </UIButton>
                <UIButton
                    onClick={() => {
                        console.log("click btn2");
                    }}
                >
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
            <div className="buttons-area">
                <UIButton
                    onClick={() => {
                        console.log("click btn1");
                    }}
                    type={UIButtonType.ROUND}
                    size={UIButtonSize.S}
                    disabled={true}
                >
                    <IdCardIcon />
                </UIButton>
                <UIButton
                    type={UIButtonType.ROUND}
                    onClick={() => {
                        console.log("click btn2");
                    }}
                >
                    <IdCardIcon />
                </UIButton>
                <UIButton
                    onClick={() => {}}
                    type={UIButtonType.ROUND}
                    size={UIButtonSize.LG}
                >
                    <IdCardIcon />
                </UIButton>

                <UIButton
                    onClick={() => {}}
                    type={UIButtonType.ROUND_INVERTED}
                    size={UIButtonSize.S}
                >
                    <IdCardIcon />
                </UIButton>
                <UIButton onClick={() => {}} type={UIButtonType.ROUND_INVERTED}>
                    <IdCardIcon />
                </UIButton>
                <UIButton
                    onClick={() => {}}
                    type={UIButtonType.ROUND_INVERTED}
                    size={UIButtonSize.LG}
                >
                    <IdCardIcon />
                </UIButton>
            </div>
        </div>
    );
};

export default MainPage;
