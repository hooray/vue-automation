const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
    publicPath: '',
    configureWebpack: {
        resolve: {
            modules: ['node_modules', 'assets/sprites']
        },
        plugins: [
            // 如果有多个目录需要生成多张精灵图，则需要创建多个 SpritesmithPlugin() 实例
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(__dirname, 'src/assets/sprites/example'),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(__dirname, 'src/assets/sprites/example.[hash].png'),
                    css: [
                        [path.resolve(__dirname, 'src/assets/sprites/_example.scss'), {
                            format: 'handlebars_based_template',
                            spritesheetName: 'example'
                        }]
                    ]
                },
                customTemplates: {
                    'handlebars_based_template': path.resolve(__dirname, 'scss.template.handlebars')
                },
                apiOptions: {
                    cssImageRef: '~example.[hash].png'
                },
                spritesmithOptions: {
                    algorithm: 'binary-tree',
                    padding: 10
                }
            })
        ]
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item.use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: [
                        './src/assets/styles/resources/*.scss',
                        './src/assets/sprites/*.scss'
                    ]
                })
                .end()
        })
        config.module
            .rule('svg')
            .exclude.add(path.join(__dirname, 'src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(path.join(__dirname, 'src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
