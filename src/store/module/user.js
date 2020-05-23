import { loginUser, kakaoLoginUser } from '@/api/userApi';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	deleteCookie,
} from '@/utils/cookies';

const state = {
	userId: '',
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
		deleteCookie('til_user');
		deleteCookie('til_auth');
		state.userId = '';
		state.nickname = '';
		state.token = '';
	},
};
const actions = {
	async LOGIN_USER(context, userData) {
		try {
			const res = await loginUser(userData);
			console.log(res);

			if (res.status === 200) {
				console.log('Login Success');
				const user = {
					userId: res.data.user.userId,
					nickname: res.data.user.nickname,
					token: res.data.token,
				};
				context.commit('SET_USER_DATA', user);
				console.log('#', res.data);

				saveAuthToCookie(res.data.token);
				saveUserToCookie(res.data.user.nickname);
			} else if (res.status === 401) {
				console.log('Login Failed: Unauthorized');
			}
		} catch (err) {
			console.error(err);
			alert('서버와의 연결이 끊어졌습니다.');
			throw err;
		}
	},
	async KAKAO_LOGIN_USER({ commit }, userData) {
		const res = await kakaoLoginUser(userData);
		console.log(res.data);

		const user = {
			userId: res.data.user.userId,
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
