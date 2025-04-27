/* eslint-disable react/display-name */

import { Decorator } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18nForStorybook from "shared/config/i18n/i18nForStorybook";

export const LangDecorator =
    (lang: string): Decorator =>
    (Story) => {
        i18nForStorybook.changeLanguage(lang);

        return (
            <I18nextProvider i18n={i18nForStorybook}>
                <Story />
            </I18nextProvider>
        );
    };
