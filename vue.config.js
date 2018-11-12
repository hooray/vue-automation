const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
	baseUrl: '',
	configureWebpack: {
		resolve: {
			modules: [
				'node_modules',
				'assets/sprites'
			]
		},
		plugins: [
			new SpritesmithPlugin({
				src: {
					cwd: path.resolve(__dirname, 'src/assets/sprites/example'),
					glob: '*.png'
				},
				target: {
					image: path.resolve(__dirname, 'src/assets/sprites/example.[hash].png'),
					css: path.resolve(__dirname, 'src/assets/sprites/_example.scss')
				},
				// 样式文件中调用雪碧图地址写法
				apiOptions: {
					generateSpriteName: function (fileName) {
						var parsed = path.parse(fileName);
						var dir = parsed.dir.split(path.sep);
						var moduleName = dir[dir.length - 1];
						return moduleName + '__' + parsed.name;
					},
					cssImageRef: '~example.[hash].png'
				},
				spritesmithOptions: {
					algorithm: 'binary-tree'
				}
			})
		]
	}
}