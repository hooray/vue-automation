<template>
	<div>
        <div id="nav">
            <router-link to="/example/sprite">sprite精灵图</router-link> |
            <router-link to="/example/axios">axios</router-link> |
            <router-link to="/example/cookie">cookie</router-link> |
            <router-link to="/example/meta">meta</router-link> |
            <router-link to="/example/vuex">vuex</router-link> |
            <router-link to="/example/component">组件</router-link> |
            <router-link :to="{name:'exampleParams',params:{test:'123'}}">路由params</router-link> |
            <router-link :to="{path:'/example/query',query:{test:'123'}}">路由query</router-link> |
            <router-link to="/example/reload">刷新当前页面</router-link> |
            <router-link to="/example/permission/router">router鉴权</router-link> |
            <router-link to="/example/permission/js">js鉴权</router-link>
        </div>
        <router-view />
	</div>
</template>
