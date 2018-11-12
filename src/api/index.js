import axios from 'axios';
import qs from 'qs';

const api = axios.create({
	baseURL: process.env.VUE_APP_API_ROOT,
	timeout: 10000,
	responseType: 'json',
	// withCredentials: true
});

api.interceptors.request.use(
	request => {
		if (request.method == 'post') {
			if (request.data instanceof FormData) {
				// 如果是 FormData 类型（上传图片）
				request.data.append('token', $cookies.get('token'));
			} else {
				// 带上 token
				if (request.data == undefined) {
					request.data = {}
				}
				if ($cookies.isKey('token') && request.data.token == undefined) {
					request.data.token = $cookies.get('token');
				}
				request.data = qs.stringify(request.data);
			}
		} else {
			// 带上 token
			if (request.params == undefined) {
				request.params = {}
			}
			if ($cookies.isKey('token') && request.params.token == undefined) {
				request.params.token = $cookies.get('token');
			}
		}
		return request;
	}
);

api.interceptors.response.use(
	response => {
		if (response.data.error != '') {
			// swal({
			// 	icon: 'error',
			// 	title: '系统错误',
			// 	text: response.data.error,
			// 	timer: 2000,
			// 	button: false
			// });
			return Promise.reject(response.data);
		}
		return response.data;
	},
	error => {
		return Promise.resolve(error);
	}
);

export {
	axios,
	api
};