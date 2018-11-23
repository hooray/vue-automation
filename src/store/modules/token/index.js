import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
	token: localStorage.token,
	failuretime: localStorage.failuretime
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}