<template>
    <div>
        <button type="button" @click="getInfo">获取数据</button>
        <img v-for="(item, index) in banner" :key="index" :src="item.image">
    </div>
</template>

<script>
import { api } from '@/api';

export default {
    data() {
        return {
            banner: []
        };
    },
    methods: {
        getInfo() {
            api.get('banner/list', {
                params: {
                    categoryid: 1
                }
            }).then(res => {
                this.banner = res.data.banner;
            });
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
