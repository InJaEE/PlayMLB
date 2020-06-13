<template>
	<div class="commentForm">
		<div class="input_wrapper">
			<a-input-search
				:placeholder="computedPlaceHolder"
				size="large"
				@search="enterComment"
				:disabled="!this.$store.getters.isLogin"
				v-model="commentData"
			>
				<a-button
					slot="enterButton"
					@click="enterComment"
					:disabled="commentLengthChk"
				>
					등록
				</a-button>
			</a-input-search>
		</div>
		<div
			class="comment_limit"
			:class="{ commentLengthWarning: commentLengthChk }"
		>
			댓글 길이: {{ commentLength }}/50
		</div>
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
			return '댓글을 입력하려면 로그인 해주세요.';
		},
		commentLength() {
			return this.commentData.length;
		},
		commentLengthChk() {
			return this.commentData.length > 50;
		},
	},
	methods: {
		async enterComment() {
			const submitData = {
				number: this.$route.params.postId,
				contents: this.commentData,
				postNumber: this.$route.params.postId,
				createdBy: {
					userId: this.$store.getters.getUserData.userId,
					nickname: this.$store.getters.getUserData.nickname,
				},
			};
			await this.$store.dispatch('CREATE_COMMENT', submitData);
			this.commentData = '';
		},
	},
};
</script>
<style scoped>
.commentForm {
	padding-top: 20px;
	border-top: 1px solid #041e42;
	border-bottom: 1px solid #041e42;
}
.comment_limit {
	text-align: left;
	margin: 5px 20px;
}
.commentLengthWarning {
	color: red;
}
</style>
