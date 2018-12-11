<template>
    <div>
        <button type="button" @click="reload">点击刷新</button>
    </div>
</template>

<script>
export default {
    inject: ['reload'],
    beforeCreate() {
        alert('触发beforeCreate');
    }
};
</script>
