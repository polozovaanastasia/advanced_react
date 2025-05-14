import { StateSchema, StoreProvider } from "app/providers/storeProvider";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export const componentRender = (
    component: React.ReactNode,
    initialState?: StateSchema
) => {
    return (
        <StoreProvider initialState={initialState}>
            <MemoryRouter>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};
