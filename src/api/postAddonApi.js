import { userInstance } from '.';

function createComment(data) {
	return userInstance.post('/postAddon/comment', data);
}

function pressRecommend(data) {
	return userInstance.put('/postAddon/recommend', data);
}

export { createComment, pressRecommend };
