<template>
	<div class="contents">
		<h1>글 수정하기</h1>
		<div>
			<a-input
				placeholder="제목"
				v-model="post.title"
				class="input_title"
			></a-input>
		</div>
		<a-textarea
			placeholder="내용"
			:rows="10"
			class="input_contents"
			v-model="post.contents"
		>
		</a-textarea>
		<div class="button_group">
			<a-button type="primary" @click="submitForm">수정하기</a-button>
		</div>
	</div>
</template>

<script>
import PostFormMixin from '@/mixins/PostFormMixin.vue';
export default {
	mixins: [PostFormMixin],
	data() {
		return {
			post: {},
		};
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		try {
			await this.$store.dispatch('LOOKUP_FOR_EDIT', this.$route.params.postId);
		} catch (err) {
			alert('잘못된 접근입니다.');
			console.error(err);
			this.$router.push('/post');
		} finally {
			this.$store.commit('SET_LOADING', false);
		}
		this.post = this.$store.getters.getPost;
	},
};
</script>

<style scoped>
.input_contents {
	resize: none;
	margin: 10px 0 30px 0;
}
.button_group button {
	margin: 0 5px;
}
</style>
