export default {
	install(Vue) {
		// 校验是否登录
		Vue.prototype.$checkLogin = function () {
			return this.$cookies.isKey('token');
		}
		Vue.prototype.$checkLoginAndJump = function () {
			if (!this.$checkLogin()) {
				this.$router.push({
					path: '/login',
					query: {
						redirect: this.$route.fullPath
					}
				});
			}
		}
	}
}