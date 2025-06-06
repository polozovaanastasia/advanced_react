/** @type {import('stylelint').Config} */

export default {
    extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
    rules: {
        "custom-property-pattern": null,
        "selector-class-pattern": null,
        "no-descending-specificity": null,
    },
};
