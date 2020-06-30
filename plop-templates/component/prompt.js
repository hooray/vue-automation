module.exports = {
    description: '创建组件',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: '请输入组件名称',
            validate: v => {
                if (!v || v.trim === '') {
                    return '组件名称不能为空'
                } else {
                    return true
                }
            }
        },
        {
            type: 'confirm',
            name: 'isGlobal',
            message: '是否为全局组件',
            default: false
        }
    ],
    actions: data => {
        const name = '{{properCase name}}'
        const actions = [
            {
                type: 'add',
                path: `src/components/${data.isGlobal ? 'global/' : ''}${name}/index.vue`,
                templateFile: 'plop-templates/component/index.hbs',
                data: {
                    name: data.name,
                    isGlobal: data.isGlobal
                }
            }
        ]
        return actions
    }
}
