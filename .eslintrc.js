module.exports = {
    root: true,
    extends: ["plugin:tailwindcss/recommended"],
    settings: {
        tailwindcss: {
            // These are the default values but feel free to customize
            callees: ["classnames", "clsx", "ctl"],
            config: "tailwind.config.js", // returned from `loadConfig()` utility if not provided
            cssFiles: [
                "**/*.css",
                "!**/node_modules",
                "!**/.*",
                "!**/dist",
                "!**/build",
            ],
            cssFilesRefreshRate: 5000,
            removeDuplicates: true,
            skipClassAttribute: false,
            whitelist: [],
            tags: [],
            classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
        },
    },
};