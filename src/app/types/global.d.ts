declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare const __IS_DEV__: boolean;

// декларации типов для импортов
