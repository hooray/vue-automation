<template>
    <div>
        <button type="button" @click="getInfo">获取数据</button>
        <button type="button" @click="removeLast">删除最后一条数据</button>
        <button type="button" @click="getLength">获取数据长度</button>
        <img v-for="(item, index) in $store.state.example.banner" :key="index" :src="item.image">
        <div v-if="$store.getters['example/bannerCount']">现在你可以切换路由，你会发现，切换回来后，数据还在。</div>
    </div>
</template>

<script>
export default {
    methods: {
        getInfo() {
            this.$store.dispatch('example/getBanner');
        },
        removeLast() {
            this.$store.commit('example/removeLast');
        },
        getLength() {
            alert(this.$store.getters['example/bannerCount']);
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
