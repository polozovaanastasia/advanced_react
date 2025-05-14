import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

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
