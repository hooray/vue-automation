const setBanner = (state, banner) => {
	state.banner = banner;
}

const removeLast = (state) => {
	state.banner.splice(state.banner.length - 1, 1);
}

export default {
	setBanner,
	removeLast
}