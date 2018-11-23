const isLogin = (state) => {
	let retn = false;
	if (state.token != null) {
		let unix = Date.parse(new Date());
		if (unix < state.failuretime * 1000) {
			retn = true;
		}
	}
	return retn;
}

export default {
	isLogin
}