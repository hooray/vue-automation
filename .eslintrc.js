module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 2015,
        parser: "babel-eslint"
    },
    rules: {
        // 代码风格
        "block-spacing": [2, "always"],
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "comma-dangle": [2, "never"],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": [2, {
            "before": true,
            "after": true
        }],
        "linebreak-style": 0,
        "multiline-ternary": [2, "always-multiline"],
        "no-multiple-empty-lines": [2, {
            "max": 1
        }],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": [2, "always", {
            "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
        }],
        "switch-colon-spacing": [2, {
            "after": true,
            "before": false
        }],
        // ES6
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2, {
            "before": true,
            "after": true
        }],
        // Vue - https://github.com/vuejs/eslint-plugin-vue
        "vue/html-indent": [2, 4],
        "vue/html-self-closing": 0,
        "vue/max-attributes-per-line": [2, {
            "singleline": 3
        }],
        "vue/require-default-prop": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/attributes-order": [2, {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                "UNIQUE",
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ]
        }],
        "vue/order-in-components": [2, {
            "order": [
                "el",
                "name",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "data",
                "computed",
                "watch",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError"
            ]
        }],
        "vue/this-in-template": [2, "never"],
        "vue/script-indent": [2, 4]
    }
};
