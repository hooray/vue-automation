<template>
    <div id="app">
        <RouterView v-if="isRouterAlive" />
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
            return title
                ? `${title} - ${process.env.VUE_APP_TITLE}`
                : process.env.VUE_APP_TITLE;
        }
    }
};
</script>
