import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://lookup-service-prod.mlb.com/json/',
});

const userInstance = axios.create({
	baseURL: 'http://localhost:3000/',
});

export { instance, userInstance };
