<template>
	<div>
		<a-input-search
			:placeholder="computedPlaceHolder"
			size="large"
			@search="onSearch"
			:disabled="!this.$store.getters.isLogin"
			v-model="commentData"
		>
			<a-button slot="enterButton" @click="onSearch">
				등록
			</a-button>
		</a-input-search>
	</div>
</template>

<script>
export default {
	data() {
		return {
			commentData: '',
		};
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
			console.log(this.$store.getters.getUserData);

			const submitData = {
				number: this.$route.params.postId,
				contents: this.commentData,
				userId: this.$store.getters.getUserData.userId,
				nickname: this.$store.getters.getUserData.nickname,
			};
			this.$store.dispatch('CREATE_COMMENT', submitData);
		},
	},
};
</script>
<style scoped></style>
