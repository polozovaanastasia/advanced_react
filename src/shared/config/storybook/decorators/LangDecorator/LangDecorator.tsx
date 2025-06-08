import { Decorator, StoryContext, StoryFn } from "@storybook/react";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForStorybook from "shared/config/i18n/i18nForStorybook";

export const LangDecorator: Decorator = (
    Story: StoryFn,
    context: StoryContext
) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18nForStorybook.changeLanguage(locale);
    }, [locale]);

    return (
        <I18nextProvider i18n={i18nForStorybook}>
            {Story(context.args, context)}
        </I18nextProvider>
    );
};
