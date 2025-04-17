import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton } from "shared/ui/UIButton/UIButton";
import * as cls from "./PageError.module.scss";

type PageErrorProps = {
    className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls["page-error"], {}, [className])}>
            <div className={cls["page-error__content"]}>
                {t("translation:unexpectedError")}
                <br />
                <UIButton
                    className={cls["page-error__button"]}
                    onClick={reloadPage}
                >
                    {t("translation:reloadPage")}
                </UIButton>
            </div>
        </div>
    );
};
