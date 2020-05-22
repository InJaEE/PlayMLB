<template>
	<div>
		<a-input-search
			placeholder="댓글"
			size="large"
			@search="onSearch"
			:disabled="!this.$store.getters.isLogin"
		>
			<a-button slot="enterButton">
				등록
			</a-button>
		</a-input-search>
	</div>
</template>

<script>
export default {
	methods: {
		onSearch() {
			alert('HELLO');
		},
	},
};
</script>
<style scoped></style>
