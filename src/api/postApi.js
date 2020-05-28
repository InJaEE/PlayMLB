import { authUserInstance } from './';

function lookupPosts() {
	return authUserInstance.get('/post');
}

function createPost(data) {
	return authUserInstance.post('/post', data);
}

function lookupOnePost(postNumber) {
	return authUserInstance.get(`/post/${postNumber}`);
}

function deletePost(postNumber) {
	return authUserInstance.delete(`/post/${postNumber}`);
}

function lookupForEdit(postNumber) {
	return authUserInstance.put(`/post/${postNumber}/edit`);
}

function editPost(postNumber, postData) {
	return authUserInstance.put(`/post/${postNumber}`, postData);
}

function createComment(data) {
	return authUserInstance.post(`/post/${data.postNumber}/comments`, data);
}

function pressRecommend(data) {
	return authUserInstance.put(`/post/${data.postNumber}/recommend`, data);
}

export {
	lookupPosts,
	createPost,
	lookupOnePost,
	deletePost,
	lookupForEdit,
	editPost,
	createComment,
	pressRecommend,
};
