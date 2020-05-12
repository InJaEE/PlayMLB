import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://lookup-service-prod.mlb.com/json/',
});

export { instance };
