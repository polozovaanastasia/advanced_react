export const themeGlobalType = {
    theme: {
        name: "Theme",
        description: "Тема",
        defaultValue: "light",
        toolbar: {
            icon: "circlehollow",
            items: [
                { value: "light", title: "Светлая" },
                { value: "dark", title: "Тёмная" },
            ],
            showName: true,
        },
    },
};
