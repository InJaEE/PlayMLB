import axios from 'axios';
import { setInterceptors } from './interceptors/';

let serverURL;

if (process.env.NODE_ENV === 'production') {
	serverURL = 'https://playmlb-server.herokuapp.com/';
} else {
	serverURL = 'http://127.0.0.1:3000/';
}

const instance = axios.create({
	baseURL: 'https://lookup-service-prod.mlb.com/json/',
});

const userInstance = axios.create({
	baseURL: serverURL,
});

function userInstanceWithAuth() {
	const userInstance = axios.create({
		baseURL: serverURL,
	});
	return setInterceptors(userInstance);
}

export { instance, userInstance };
export const authUserInstance = userInstanceWithAuth();
