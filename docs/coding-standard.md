# 代码规范

## IDE 编辑器

为保证代码风格统一，统一使用 [VS Code](https://code.visualstudio.com/) 做为开发 IDE ，并安装以下扩展：

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

安装完后在 `settings.json` 中增加如下配置：

```json
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true,
	"source.fixAll.stylelint": true
}
```

最终效果为，在保存时，会自动对当前文件进行代码格式化操作。

## Git 钩子

上述操作仅对代码的写法规范进行格式化，例如缩进、空格、结尾的分号等。

而在提交代码时， Git 的钩子会检查代码中是否有错误，这些错误是 IDE 无法自动修复的，例如出现未使用过的变量。如果有错误，则会取消此次提交，直到开发者修复完所有错误后才允许提交成功，确保仓库里的代码绝对正确。

> 可通过修改 `.eslintignore` 和 `.stylelintignore` 忽略无需做代码规范的文件，例如在项目中引用了一些第三方的插件或组件，我们就可以将其忽略

如果 `git init` 仓库初始化是在依赖包安装之后执行的，则无法初始化 Git 钩子，建议在 `git init` 之后再执行一遍 `yarn` 或者 `npm i` ，重新安装一遍依赖包。