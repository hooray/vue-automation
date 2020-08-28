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
        }
    },
    methods: {
        getInfo() {
            Promise.all([
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
            ]).then(res => {
                this.banner = res[0].data.banner.concat(
                    res[1].data.banner
                )
            })
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 300px;
}
</style>
