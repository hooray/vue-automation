<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">首页</router-link> |
            <router-link to="/sprite">sprite精灵图</router-link> |
            <router-link to="/axios">axios</router-link> |
            <router-link to="/cookie">cookie</router-link> |
            <router-link to="/meta">meta</router-link> |
            <router-link to="/vuex">vuex</router-link> |
            <router-link to="/component">组件</router-link> |
            <router-link :to="{name:'exampleParams',params:{test:'123'}}">路由params</router-link> |
            <router-link :to="{path:'/query',query:{test:'123'}}">路由query</router-link> |
            <router-link to="/reload">刷新当前页面</router-link> |
            <router-link to="/permission/router">router鉴权</router-link> |
            <router-link to="/permission/js">js鉴权</router-link> |
            <router-link to="/login">模拟登录页</router-link>
        </div>
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
export default {
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isRouterAlive: true
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => (this.isRouterAlive = true));
        }
    },
    metaInfo: {
        titleTemplate: title => {
            return title ? `${title} - Vue-automation` : 'Vue-automation';
        }
    }
};
</script>
