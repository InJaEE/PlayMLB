import {
	createPost,
	lookupOnePost,
	lookupPosts,
	deletePost,
	lookupForEdit,
	editPost,
	createComment,
	pressRecommend,
} from '@/api/postApi';

const state = {
	posts: [],
	post: {},
};
const getters = {
	getPosts(state) {
		return state.posts;
	},
	getPost(state) {
		return state.post;
	},
};
const mutations = {
	SET_POSTS(state, payload) {
		state.posts = payload;
	},
	SET_POST(state, payload) {
		state.post = payload;
	},
	RESET_POST(state) {
		state.post = {};
	},
	ADD_COMMENT(state, payload) {
		state.post.comments.unshift(payload);
	},
	TOGGLE_RECOMMEND(state) {
		const isRecommend = state.post.isRecommend;
		if (isRecommend) {
			state.post.countRecommend -= 1;
		} else {
			state.post.countRecommend += 1;
		}
		state.post.isRecommend = !state.post.isRecommend;
	},
};
const actions = {
	async CREATE_POST(context, postData) {
		await createPost(postData);
	},
	async LOOKUP_ONE_POST({ getters, commit }, postData) {
		try {
			const { data } = await lookupOnePost(postData);
			const chkRecommend = data.post.recommend.find(v => {
				return v.recommendBy === getters.getUserData.userId;
			});
			const post = data.post;
			post.createdBy = post.createdBy.nickname;
			if (chkRecommend) {
				post.isRecommend = true;
			} else {
				post.isRecommend = false;
			}
			post.countRecommend = post.recommend.length;

			post.comments.sort((a, b) => {
				return b.createdAt < a.createdAt
					? -1
					: b.createdAt > a.createdAt
					? 1
					: 0;
			});
			commit('SET_POST', post);
		} catch (err) {
			console.error(err);
		}
	},
	async LOOKUP_POSTS(context) {
		const { data } = await lookupPosts();
		context.commit('SET_POSTS', data.posts);
	},
	async DELETE_POST(context, postNumber) {
		await deletePost(postNumber);
	},
	async LOOKUP_FOR_EDIT(context, postNumber) {
		try {
			const res = await lookupForEdit(postNumber);
			context.commit('SET_POST', res.data);
		} catch (err) {
			console.error(err);
		}
	},
	async EDIT_POST(context, postData) {
		try {
			await editPost(postData.number, postData.data);
		} catch (err) {
			console.error(err);
		}
	},
	async CREATE_COMMENT(context, commentData) {
		try {
			context.commit('ADD_COMMENT', commentData);
			await createComment(commentData);
		} catch (err) {
			console.error(err);
		}
	},
	async PRESS_RECOMMEND(context, userData) {
		try {
			await pressRecommend(userData);
		} catch (err) {
			console.error(err);
		}
	},
};

export default { state, getters, mutations, actions };
