import axios from 'axios';

const serverURL = () => {
	if (process.env.NODE_ENV) {
		return 'https://playmlb-server.herokuapp.com/';
	} else {
		return 'http://localhost:3000/';
	}
};

const instance = axios.create({
	baseURL: 'https://lookup-service-prod.mlb.com/json/',
});

const userInstance = axios.create({
	baseURL: serverURL,
});

export { instance, userInstance };
