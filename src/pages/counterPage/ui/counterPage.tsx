import { useTranslation } from "react-i18next";
import { Counter } from "./counter";

const CounterPage = () => {
    const { t } = useTranslation("counter");
    return (
        <>
            <h1>{t("counter:counter")}</h1>
            <Counter />
        </>
    );
};

export default CounterPage;
