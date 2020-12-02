# Mock与联调

框架使用 [Mockjs](https://github.com/nuysoft/Mock) 做为模拟数据生成，mock 数据编写规则请阅读官方文档。

框架提供两套 mock 解决方案，请对比下述的介绍后自行选择。需注意，两套方案的 mock 数据无法通用，在编写上有一定差异。

Mockjs 虽然很好用，但是在大型项目中其实并不合适，正规的测试应该是搭建专门的测试服务器进行测试，只是在一些中小型公司，没有这样的资源，使用 Mockjs 是一个折中的办法。

> 以下两套方案均需要在 `.env.development` 中设置 `VUE_APP_API_ROOT` 为真实接口地址，例如 `VUE_APP_API_ROOT = http://baidu.com/api/`

## 方案一 mockjs

### 使用说明

这是最常见的使用方式，你只需在 `./src/main.js` 中找到 `import './mock'` 并将其注释去掉，然后到 `./src/mock/modules/` 目录下新增 js 文件，然后在里面编写 mock 数据代码即可，例如：

```js
// ./src/mock/modules/test.js
module.exports = [
    {
        url: 'test',
        type: 'get',
        result: {
            error: '',
            state: 1,
            data: {
                title: '测试',
                images: '@image(\'200x200\',\'red\',\'#fff\',\'avatar\')'
            }
        }
    }
]
```

当你配置好 mock 数据后，在页面中就可以通过 `this.$api` 进行测试了

```js
this.$api.get('mock/test').then(res => {
    console.log(res)
})
```

这时候可以在控制台看到 mock 数据正常打印出来了。

你可能会问，我在 `test.js` 里定义的 `url` 是 `test` ，为什么在调用接口的时候，需要写成 `mock/test` ，这其实是框架的 mock 约定，在 `./src/mock/index.js` 里可以看到这句代码：

```js
Mock.mock(new RegExp(`${process.env.VUE_APP_API_ROOT}mock/${mock.url}`), mock.type || 'get', mock.result)
```

其中需要拦截的 URL 是拼接出来的，中间强制带上了 `mock/` ，这么做的目的是为了方便开发中进行 mock 和真实接口进行切换。例如还是同样的 `test` 接口，当后端开发完毕，只需将调用接口的地方把 `mock/` 删掉即可。

```js
this.$api.get('test').then(res => {
    console.log(res)
})
```

因为请求 URL 改变了，mock 拦截不到，所以这个请求就会切换为真实接口。

:::tip 扩展
如果你不喜欢框架的这个 mock 约定，你也可以将 `./src/mock/index.js` 里改为：

```js
Mock.mock(new RegExp(`${process.env.VUE_APP_API_ROOT}${mock.url}`), mock.type || 'get', mock.result)
```

这样调用的时候直接这样就可以：

```js
this.$api.get('test').then(res => {
    console.log(res)
})
```

如果要切换为真实接口，到 `./src/mock/modules/test.js` 里注释或删除对应的 mock 数据即可。
:::

:::warning 注意
mock 数据一般仅存在于开发环境，打包的时候注意将 `./src/main.js` 中的 `import './mock'` 删除或注释掉
:::

### 弊端

它的最大问题是就是它的实现机制，因为通过重写浏览器的 `XMLHttpRequest` 对象，从而才能拦截请求。大部分情况下用起来还是蛮方便的，但就因为它重写了 `XMLHttpRequest` 对象，所以比如 `progress` 方法，或者一些底层依赖 `XMLHttpRequest` 的库都会和它发生不兼容。

其次因为它是本地模拟的数据，实际上不会走任何网络请求，开发过程中，只能通过 `console.log` 进行调试。

## 方案二 mock-server

这个方案依托于 [vue-cli-plugin-mock](https://github.com/xuxihai123/vue-cli-plugin-mock) 插件实现，主要目的是解决方案一的几个开发弊端，因为是一个真正的 server ，所以你可以通过浏览器开发者工具中的 network ，清楚的看到接口返回的数据结构，并且同时解决了之前 `mockjs` 会重写 `XMLHttpRequest` 对象，导致很多第三方库失效的问题。

### 使用说明

首先将 `./src/api/index.js` 的 `baseURL` 注释掉或设为空

```js
const api = axios.create({
    // baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 10000,
    responseType: 'json'
    // withCredentials: true
})
```

然后打开 `vue.config.js` 修改

```js
module.exports = {
    ...
    devServer: {
        open: true,
        proxy: {
            '/mock': {
                target: '/',
                changeOrigin: true
            },
            '/': {
                target: process.env.VUE_APP_API_ROOT,
                changeOrigin: true
            }
        }
	},
	...
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true
        },
        mock: {
            entry: './src/mock/server.js',
            debug: true
        }
    },
	...
}
```

剩下的操作和方案一类似，在 `./src/mock/server-modules/` 目录下新增 js 文件，然后在里面编写 mock 数据代码即可，注意下编写的规则。


编写好 mock 后，执行下面那段请求代码，就可以在 Network 里看到真实的网络请求了，并且返回的是我们编写的 mock 数据。

```js
this.$api.get('mock/test')
```

如果需要在 mock 和真实接口切换调试只需删除 `mock/` 即可

```js
this.$api.get('test')
```

因为我们设置的本地代理规则是，`/mock` 转发到 `/` 也就是本地，而 `/` 转发到 `process.env.VUE_APP_API_ROOT` ，也就是我们的真实接口地址。

### 弊端

此方案只是优化了本地开发，因为是本地启用 server ，但如果线上环境需要使用 mock ，只能通过方案一实现。

## 总结

> 两种方案均支持开发环境下 mock 和真实接口的快速切换

方案一适合简单场景，并且线上环境如果也需要调用 mock 数据，那只能选这种，本框架演示站的登录以及权限获取就是使用此方案。

方案二因为启用了真实 server ，所以适合复杂场景，加上会触发真实网络请求，开发效率比方案一高，并且 mock 文件的编写更容易上手，缺点是 mock 文件无法和方案一共用，如果你即需要使用方案二，又要在线上环境调用 mock 数据，那就需要你维护两份 mock 文件。
