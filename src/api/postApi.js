import { userInstance, authUserInstance } from './';

function lookupPosts() {
	return userInstance.get('/postWithoutAuth');
}

function createPost(data) {
	return authUserInstance.post('/post', data);
}

function lookupOnePost(postNumber) {
	return userInstance.get(`/postWithoutAuth/${postNumber}`);
	// return userInstance.get(`/post/${postNumber}`);
}

function deletePost(postNumber) {
	return authUserInstance.delete(`/post/${postNumber}`);
}

function editPost(postNumber) {
	return authUserInstance.put(`/post/${postNumber}`);
}

export { lookupPosts, createPost, lookupOnePost, deletePost, editPost };
