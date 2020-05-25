import { authUserInstance, userInstance } from '.';

function createComment(data) {
	return authUserInstance.post('/post/comments', data);
}

function pressRecommend(data) {
	return authUserInstance.put('/post/recommend', data);
}

export { createComment, pressRecommend };
