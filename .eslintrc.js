module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 2015,
        parser: "babel-eslint"
    },
    plugins: [
        "vue"
    ],
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
        "vue/attribute-hyphenation": [2, "never"],
        "vue/component-name-in-template-casing": [2, "PascalCase", {
            "ignores": []
        }],
        "vue/html-closing-bracket-newline": [2, {
            "singleline": "never",
            "multiline": "always"
        }],
        "vue/html-closing-bracket-spacing": [2, {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],
        "vue/html-indent": [2, 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/html-quotes": [2, "double"],
        "vue/name-property-casing": [2, "PascalCase"],
        "vue/no-multi-spaces": [2, {
            "ignoreProperties": false
        }],
        "vue/no-spaces-around-equal-signs-in-attribute": 2,
        "vue/prop-name-casing": [2, "camelCase"],
        "vue/v-bind-style": [2, "shorthand"],
        "vue/v-on-style": [2, "shorthand"],
        "vue/order-in-components": ["error", {
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
        "vue/this-in-template": [2, "never"]
    }
};
