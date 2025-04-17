import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UIButton } from "../UIButton/UIButton";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <UIButton className="bug-button" onClick={throwError}>
            {t("translation:bugButton")}
        </UIButton>
    );
};
