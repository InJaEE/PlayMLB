import {
	createPost,
	lookupOnePost,
	lookupPosts,
	deletePost,
	// editPost,
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
		try {
			await createPost(postData);
		} catch (err) {
			console.error(err);
		}
	},
	async LOOKUP_ONE_POST({ getters, commit }, postData) {
		const { data } = await lookupOnePost(postData);
		const chkRecommend = data.post.recommend.find(v => {
			return v.recommendBy === getters.getUserData.userId;
		});
		const post = data.post;
		if (chkRecommend) {
			post.isRecommend = true;
		} else {
			post.isRecommend = false;
		}
		post.countRecommend = post.recommend.length;

		post.comments.sort((a, b) => {
			return b.createdAt < a.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0;
		});
		commit('SET_POST', post);
	},
	async LOOKUP_POSTS(context) {
		const { data } = await lookupPosts();
		context.commit('SET_POSTS', data.posts);
	},
	async DELETE_POST(context, postNumber) {
		await deletePost(postNumber);
	},
	// async EDIT_POST(context, postData) {
	// 	const res = await editPost();
	// },
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
			const res = await pressRecommend(userData);
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	},
};

export default { state, getters, mutations, actions };
