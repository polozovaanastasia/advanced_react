import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    return (
        <>
            <h1>{t("main:mainPage")}</h1>
            <h2>{t("main:welcome")}</h2>
        </>
    );
};

export default MainPage;
