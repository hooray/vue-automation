# vue-automation

## 说明

该仓库是为统一 Vue 项目初期配置而设立，方便快速进行业务开发。

## 依赖

- vue-router
- vuex
- axios
- vue-cookies
- vue-meta
- node-sass
- sass-loader
- webpack-spritesmith

## 例子

拉取到本地运行后，会看到部分功能演示，同时项目目录里带有 `example` 的目录均为演示代码。

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
