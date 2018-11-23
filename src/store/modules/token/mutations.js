const setData = (state, data) => {
	localStorage.setItem('token', data.token);
	localStorage.setItem('failuretime', data.failuretime);
	state.token = data.token;
	state.failuretime = data.failuretime;
}

export default {
	setData
}