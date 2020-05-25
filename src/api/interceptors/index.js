import store from '@/store';

export function setInterceptors(instance) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function(config) {
			config.headers.Authorization = store.getters.getUserData.token;
			console.log('###@@@@@@@@##', config);
			return config;
		},
		function(error) {
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			return response;
		},
		function(error) {
			return Promise.reject(error);
		},
	);
	return instance;
}
