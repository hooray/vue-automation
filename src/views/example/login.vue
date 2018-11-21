<template>
    <div>
        <button @click="login">模拟登录</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            // 模拟登录成功后往 cookie 里写入 token 值，并返回之前页面
            this.$cookies.set('token', 'test-token');
            if (this.$route.query.redirect) {
                this.$router.replace({
                    path: this.$route.query.redirect
                });
            } else {
                if (window.history.length <= 1) {
                    this.$router.push({ path: '/' });
                } else {
                    this.$router.go(-1);
                }
            }
        }
    }
};
</script>
