import { loginUser, kakaoLoginUser, signupUser } from '@/api/userApi';
import {
	saveAuthToCookie,
	saveIdToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getIdFromCookie,
	getUserFromCookie,
	deleteCookie,
} from '@/utils/cookies';

const state = {
	userId: getIdFromCookie() || '',
	nickname: getUserFromCookie() || '',
	token: getAuthFromCookie() || '',
};
const getters = {
	getUserData(state) {
		const userData = {
			userId: state.userId,
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
		state.userId = userData.userId;
		state.nickname = userData.nickname;
		state.token = userData.token;
	},
	LOGOUT_USER(state) {
		deleteCookie('playMLB_auth');
		deleteCookie('playMLB_id');
		deleteCookie('playMLB_user');
		state.token = '';
		state.userId = '';
		state.nickname = '';
	},
};
const actions = {
	async LOGIN_USER(context, userData) {
		try {
			const res = await loginUser(userData);
			if (res.status === 200) {
				const user = {
					userId: res.data.user.userId,
					nickname: res.data.user.nickname,
					token: res.data.token,
				};
				context.commit('SET_USER_DATA', user);

				saveAuthToCookie(res.data.token);
				saveIdToCookie(res.data.user.userId);
				saveUserToCookie(res.data.user.nickname);
			} else if (res.status === 401) {
				console.log('Login Failed: Unauthorized');
			}
		} catch (err) {
			//console.error(err);
			alert(err.response.data);
		}
	},
	async KAKAO_LOGIN_USER({ commit }, userData) {
		const res = await kakaoLoginUser(userData);
		const user = {
			userId: res.data.userId,
			nickname: res.data.nickname,
			token: res.data.token,
		};
		commit('SET_USER_DATA', user);
		saveAuthToCookie(res.data.token);
		saveIdToCookie(res.data.userId);
		saveUserToCookie(res.data.nickname);
	},
	async SIGNUP_USER(context, userData) {
		await signupUser(userData);
	},
};
export default {
	state,
	getters,
	mutations,
	actions,
};
