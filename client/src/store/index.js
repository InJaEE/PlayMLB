import vue from 'vue';
import vuex from 'vuex';
import user from './module/user';
import stat from './module/stat';
import playerInfo from './module/playerInfo';

vue.use(vuex);

export default new vuex.Store({
	modules: {
		user,
		stat,
		playerInfo,
	},
	state: {
		currentPage: '',
	},
});
