import { createComment, pressRecommend } from '@/api/postAddonApi';

const state = {};

const getters = {};

const mutations = {};

const actions = {
	async PRESS_RECOMMEND(context, userData) {
		try {
			await pressRecommend(userData);
		} catch (err) {
			console.error(err);
		}
	},
	async CREATE_COMMENT(context, commentData) {
		try {
			await createComment(commentData);
		} catch (err) {
			console.error(err);
		}
	},
};

export default { state, getters, mutations, actions };
