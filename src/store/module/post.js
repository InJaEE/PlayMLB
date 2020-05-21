import {
	createPost,
	lookupOnePost,
	lookupPosts,
	deletePost,
	editPost,
} from '@/api/postApi';

const state = {
	posts: [],
};
const getters = {
	getPosts(state) {
		return state.posts;
	},
};
const mutations = {
	SET_POSTS(state, data) {
		state.posts = data;
	},
};
const actions = {
	async CREATE_POST(context, data) {
		const res = await createPost();
	},
	async LOOKUP_ONE_POST(context, data) {
		const res = await lookupOnePost();
	},
	async LOOKUP_POSTS(context) {
		const res = await lookupPosts();
		console.log('@', res);

		context.commit('SET_POSTS', res.data.posts);
	},
	async DELETE_POST(context, data) {
		const res = await deletePost();
	},
	async EDIT_POST(context, data) {
		const res = await editPost();
	},
};

export default { state, getters, mutations, actions };
