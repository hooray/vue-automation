const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
    publicPath: '',
    configureWebpack: {
        resolve: {
            modules: ['node_modules', 'assets/sprites']
        },
        plugins: [
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(__dirname, 'src/assets/sprites/example'),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(
                        __dirname,
                        'src/assets/sprites/example.[hash].png'
                    ),
                    css: path.resolve(
                        __dirname,
                        'src/assets/sprites/_example.scss'
                    )
                },
                // 样式文件中调用雪碧图地址写法
                apiOptions: {
                    generateSpriteName: function(fileName) {
                        var parsed = path.parse(fileName)
                        var dir = parsed.dir.split(path.sep)
                        var moduleName = dir[dir.length - 1]
                        return moduleName + '__' + parsed.name
                    },
                    cssImageRef: '~example.[hash].png'
                },
                spritesmithOptions: {
                    algorithm: 'binary-tree'
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
                        './src/assets/styles/global/*.scss',
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
