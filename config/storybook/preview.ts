import type { Preview } from "@storybook/react";
import { LangDecorator } from "shared/config/storybook/decorators/LangDecorator/LangDecorator";
import { StyleDecorator } from "shared/config/storybook/decorators/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import { globalTypes } from "shared/config/storybook/globals/globalTypes";
import { Theme } from "shared/config/themeConfig/themeConfig";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), LangDecorator],
    globalTypes,
};

export default preview;
