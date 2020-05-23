<template>
	<div>
		<a-input-search
			:placeholder="computedPlaceHolder"
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
	data() {
		return {};
	},
	computed: {
		computedPlaceHolder() {
			if (this.$store.getters.isLogin) {
				return '댓글을 입력해주세요.';
			}
			return '댓글을 입력하려면 로그인을 해주세요.';
		},
	},
	methods: {
		onSearch() {
			alert('HELLO');
		},
	},
};
</script>
<style scoped></style>
