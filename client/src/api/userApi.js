import { userInstance } from './';

function registerUser(userData) {
	return userInstance('signup', userData);
}

function loginUser(userData) {
	return userInstance('login', userData);
}

export { registerUser, loginUser };
