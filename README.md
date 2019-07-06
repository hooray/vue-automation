# vue-automation

## 说明

该仓库是为统一 Vue 项目初期配置而设立，方便快速进行业务开发，基于 Vue CLI 3 。

## 依赖

- vue-router
- vuex
- axios
- vue-cookies
- vue-meta
- node-sass
- sass-loader
- sass-resources-loader
- svg-sprite-loader
- webpack-spritesmith

## 例子

拉取到本地运行后，会看到部分功能演示，同时项目目录里带有 `example` 的目录均为演示代码。

## 全局 SCSS

在 `assets/styles` 目录下有个 `global` 文件夹，该文件夹用于存放全局的 .scss 文件，也就是说在这个目录里的文件，无需在页面上引用即可生效并使用。

例子中默认存放了 `utils.scss` 文件，里面有几个 `@mixin` 和 `%` ，你可以尝试在页面中使用它们看看效果。

同样，sprites 生成的 .scss 文件也是默认全局。

## IDE（编辑器）

推荐使用 [VS Code](https://code.visualstudio.com/) ，并安装以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

ESLint 参考配置

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
        "language": "vue",
        "autoFix": true
    }
],
"eslint.run": "onSave",
"eslint.autoFixOnSave": true,
"eslint.packageManager": "yarn"
```

## 代码风格

如果不能接受本项目的代码风格，可在 `.editconfig.js` 和 `.eslintrc.js` 中分别修改编辑器配置和代码风格规则后，运行 `npm run lint` 进行代码风格检查并修复。

例如你想以 2 个空格进行代码缩进，需要在 `.editconfig.js` 里将 `indent_size = 4` 改为 `indent_size = 2` ，在 `.eslintrc.js` 里分别将 `indent` 、`vue/html-indent` 、`vue/script-indent` 均设置为 2 ，最后运行 `npm run lint` ，部分规则可能不支持自动修复，则需要手动操作，可以参考以下两个规则配置文档：

1. [ESLint](http://eslint.cn/docs/rules/)
2. [eslint-plugin-vue](https://vuejs.github.io/eslint-plugin-vue/rules/)
