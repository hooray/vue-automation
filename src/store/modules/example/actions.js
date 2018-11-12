import {
	api
} from '@/api'

const getBanner = (store) => {
	api.get('banner/list', {
		params: {
			categoryid: 1
		}
	}).then(res => {
		store.commit('setBanner', res.data.banner);
	})
}

export default {
	getBanner
}