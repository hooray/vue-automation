import {
	api
} from '@/api'

const login = (store, data) => {
	return new Promise((resolve, reject) => {
		// 模拟登录成功，写入 token 信息
		store.commit('setData', {
			token: '1234567890',
			failuretime: Date.parse(new Date()) / 1000 + 24 * 60 * 60
		});
		resolve();

		// api.post('member/login', data).then(res => {
		// 	store.commit('setData', res.data);
		// 	resolve(res);
		// }).catch((error) => {
		// 	reject(error);
		// });
	})
}

export default {
	login
}