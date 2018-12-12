<template>
    <div>
        <button type="button" @click="getInfo">获取数据</button>
        <img v-for="(item, index) in banner" :key="index" :src="item.image">
    </div>
</template>

<script>
export default {
    data() {
        return {
            banner: []
        };
    },
    methods: {
        getInfo() {
            this.$axios.all([
                this.$api.get('banner/list', {
                    params: {
                        categoryid: 1
                    }
                }),
                this.$api.get('banner/list', {
                    params: {
                        categoryid: 2
                    }
                })
            ]).then(
                this.$axios.spread((acct, perms) => {
                    this.banner = acct.data.banner.concat(
                        perms.data.banner
                    );
                })
            );
        }
    }
};
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 300px;
}
</style>
