<template>
	<a-result
		title="Warning!"
		sub-title="서버와의 통신 과정에서 에러가 발생하였습니다."
	>
		<template #extra>
			<a-button type="primary" @click="goHome">
				메인 화면으로
			</a-button>
		</template>
	</a-result>
</template>
<script>
export default {
	methods: {
		goHome() {
			this.$router.push('/');
		},
	},
};
</script>
