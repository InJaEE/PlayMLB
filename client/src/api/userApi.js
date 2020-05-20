import { userInstance } from './';

function signupUser(userData) {
	return userInstance.post('signup', userData);
}

function loginUser(userData) {
	return userInstance.post('login', userData);
}

function kakaoLoginUser(userData) {
	return userInstance.post('kakao', userData);
}

export { signupUser, loginUser, kakaoLoginUser };
