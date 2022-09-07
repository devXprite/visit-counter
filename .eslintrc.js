module.exports = {
    env: {
        browser: false,
        commonjs: true,
        es2021: true,
    },
    extends: ["prettier", "airbnb-base", "plugin:unicorn/recommended"],
    overrides: [],
    plugins: ["unicorn", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "unicorn/prefer-top-level-await": "off",
        "unicorn/prefer-module": "off",
        "unicorn/filename-case": "off",
        "unicorn/explicit-length-check": "off",
        "unicorn/prevent-abbreviations": "off",
        "consistent-return": "off",
        "unicorn/better-regex": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/numeric-separators-style": "off",
        "no-param-reassign": "off",
        "max-len": "off",
        quotes: [2, "double"],
        indent: ["error", 4],
    },
};
