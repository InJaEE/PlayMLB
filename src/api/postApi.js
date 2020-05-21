import { userInstance } from './';

function lookupPosts() {
	return userInstance.get('/post');
}

function createPost(data) {
	return userInstance.post('/post', data);
}

function lookupOnePost(postNumber) {
	return userInstance.post(`/post/${postNumber}`);
}

function deletePost(postNumber) {
	return userInstance.delete(`/post/${postNumber}`);
}

function editPost(postNumber) {
	return userInstance.put(`/post/${postNumber}`);
}

export { lookupPosts, createPost, lookupOnePost, deletePost, editPost };
