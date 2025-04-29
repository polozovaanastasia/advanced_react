import type { Preview } from "@storybook/react";
import { LangDecorator } from "shared/config/storybook/decorators/LangDecorator/LangDecorator";
import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "shared/config/storybook/decorators/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import { globalTypes } from "shared/config/storybook/globals/globalTypes";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator,
        LangDecorator,
        RouterDecorator,
    ],
    globalTypes,
};

export default preview;
