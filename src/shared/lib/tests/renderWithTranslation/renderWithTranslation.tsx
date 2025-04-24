import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";

export const renderWithTranslation = (component: React.ReactNode) => {
    return <I18nextProvider i18n={i18n}>{component}</I18nextProvider>;
};
