const state = {
	isLoading: false,
};

const getters = {
	getLoading: state => state.isLoading,
};

const mutations = {
	SET_LOADING: (state, data) => {
		state.isLoading = data;
	},
};

export default {
	state,
	getters,
	mutations,
};
