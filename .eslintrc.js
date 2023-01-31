module.exports = {
    root: true,
    // extends: '@react-native-community',
    extends: ['eslint:recommended', 'plugin:react-native/recommended'],
    "plugins": [
        "react-native",
        "simple-import-sort",
        "sort-keys-fix",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "block-scoped-var": WARN,
        "default-case": WARN,
        "react/jsx-sort-props": [
            "error",
            {
                ignoreCase: true,
            },
        ],
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",
        "sort-keys-fix/sort-keys-fix": "off",
    }
};
