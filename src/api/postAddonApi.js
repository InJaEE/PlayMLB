import { userInstance } from '.';

function createComment(data) {
	return userInstance.post('/postAddon/comments', data);
}

function pressRecommend(data) {
	return userInstance.put('/postAddon/recommend', data);
}

export { createComment, pressRecommend };
