import vue from 'vue';
import vuex from 'vuex';
import user from './module/user';
import stat from './module/stat';
import playerInfo from './module/playerInfo';
import loading from './module/loading';

vue.use(vuex);

export default new vuex.Store({
	modules: {
		user,
		stat,
		playerInfo,
		loading,
	},
	state: {
		currentPage: '',
	},
});
