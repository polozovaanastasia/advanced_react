declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.mp4" {
    const src: string;
    export default src;
}

declare const __IS_DEV__: boolean;
