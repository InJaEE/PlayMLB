import { userInstance } from './';

function signupUser(userData) {
	return userInstance.post('signup', userData);
}

function loginUser(userData) {
	return userInstance.post('login', userData);
}

export { signupUser, loginUser };
