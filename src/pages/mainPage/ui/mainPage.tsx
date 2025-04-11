import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    return (
        <>
            <h1>{t("Главная страница")}</h1>
            <h2>{t("Добро пожаловать")}</h2>
        </>
    );
};

export default MainPage;
