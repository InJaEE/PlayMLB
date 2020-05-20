import { loginUser, kakaoLoginUser } from '@/api/userApi';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';

const state = {
	username: '',
	nickname: getUserFromCookie() || '',
	token: getAuthFromCookie() || '',
};
const getters = {
	getUserData(state) {
		const userData = {
			username: state.username,
			nickname: state.nickname,
			token: state.token,
		};
		return userData;
	},
	isLogin(state) {
		return state.nickname !== '';
	},
};
const mutations = {
	SET_USER_DATA(state, userData) {
		state.username = userData.username;
		state.nickname = userData.nickname;
		state.token = userData.token;
	},
	LOGOUT_USER(state) {
		state.username = '';
		state.nickname = '';
		state.token = '';
	},
};
const actions = {
	async LOGIN_USER(context, userData) {
		try {
			const res = await loginUser(userData);
			if (res.status === 200) {
				console.log('Login Success');
				const user = {
					username: res.data.user.username,
					nickname: res.data.user.nickname,
					token: res.data.token,
				};
				context.commit('SET_USER_DATA', user);
				saveAuthToCookie(res.data.token);
				saveUserToCookie(res.data.user.nickname);
			} else if (res.status === 401) {
				console.log('Login Failed: Unauthorized');
			}
		} catch (err) {
			console.error(err);
			throw err;
		}
	},
	async KAKAO_LOGIN_USER({ commit }, userData) {
		console.log('!!!', userData);

		const res = await kakaoLoginUser(userData);
		console.log('***', res);
		const user = {
			username: res.data.user.username,
			nickname: res.data.user.nickname,
			token: res.data.token,
		};
		commit('SET_USER_DATA', user);
		saveAuthToCookie(res.data.token);
		saveUserToCookie(res.data.user.nickname);
	},
};
export default {
	state,
	getters,
	mutations,
	actions,
};
