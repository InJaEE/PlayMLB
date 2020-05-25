<template>
	<div>
		<a-input-search
			:placeholder="computedPlaceHolder"
			size="large"
			@search="enterComment"
			:disabled="!this.$store.getters.isLogin"
			v-model="commentData"
		>
			<a-button slot="enterButton" @click="enterComment">
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
		async enterComment() {
			const submitData = {
				number: this.$route.params.postId,
				contents: this.commentData,
				userId: this.$store.getters.getUserData.userId,
				nickname: this.$store.getters.getUserData.nickname,
				postNumber: this.$route.params.postId,
			};
			this.$store.dispatch('CREATE_COMMENT', submitData);
			this.commentData = '';
		},
	},
};
</script>
<style scoped></style>
