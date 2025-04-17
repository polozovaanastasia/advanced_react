import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton, UIButtonType } from "shared/ui/UIButton/UIButton";
import * as cls from "./LangSwitcher.module.scss";

type LangSwitcherProps = {
    className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ru" ? "en" : "ru";
        changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };
    return (
        <UIButton
            className={classNames(cls["lang-switcher"], {}, [className])}
            type={UIButtonType.ROUND}
            onClick={toggleLanguage}
        >
            {t("translation:languageSwitcher")}
        </UIButton>
    );
};
