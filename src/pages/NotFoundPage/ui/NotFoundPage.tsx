import { useTranslation } from "react-i18next";
import video from "shared/assets/video/leo.mp4";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./notFoundPage.module.scss";

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls["page_not-found"], {}, [])}>
            <div>
                <h1>{t("translation:notFoundPage")}</h1>
            </div>
            <div>
                <video autoPlay muted loop width={500} src={video}></video>
            </div>
        </div>
    );
};
