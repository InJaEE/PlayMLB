<template>
	<a id="kakao-login-btn"></a>
</template>

<script>
export default {
	methods: {
		async kakaoLogin(data) {
			this.$store.commit('SET_LOADING', true);
			const userData = {
				username: data.kakao_account.email,
				nickname: data.kakao_account.profile.nickname,
				snsId: data.id,
			};
			await this.$store.dispatch('KAKAO_LOGIN_USER', userData);
			this.$store.commit('SET_LOADING', false);
			this.$router.push('/');
		},
	},
	/* eslint-disable */
	mounted() {
		const vm = this;
		if (!Kakao.isInitialized()) {
			Kakao.init(process.env.VUE_APP_KAKAO_JS_KEY);
		}
		Kakao.Auth.createLoginButton({
			container: '#kakao-login-btn',
			success(authObj) {
				Kakao.API.request({
					url: '/v2/user/me',
					success(res) {
						vm.kakaoLogin(res);
					},
					fail(err) {
						console.error(JSON.stringify(err));
					},
				});
			},
			fail(err) {
				console.error('failed to login: ', JSON.stringify(err));
			},
		});
	},
	/* eslint-disable */
};
</script>

<style></style>
