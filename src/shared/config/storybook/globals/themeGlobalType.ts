import { Theme } from "shared/config/themeConfig/themeConfig";

export const themeGlobalType = {
    theme: {
        name: "Theme",
        description: "Тема",
        defaultValue: "light",
        toolbar: {
            icon: "circlehollow",
            items: [
                { value: Theme.LIGHT, title: "Светлая" },
                { value: Theme.DARK, title: "Тёмная" },
            ],
            showName: true,
        },
    },
};
