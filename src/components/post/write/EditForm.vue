<template>
	<div class="contents">
		<h1>글 수정하기</h1>
		<quill-editor
			@changeContents="changeContents"
			@changeTitle="titleChange"
		></quill-editor>
		<div class="button_group">
			<a-button type="primary" @click="submitForm">수정하기</a-button>
		</div>
	</div>
</template>

<script>
import PostFormMixin from '@/mixins/PostFormMixin.vue';
import quillEditor from '@/components/post/write/QuillEditor.vue';
import { LOOKUP_FOR_EDIT } from '@/store/module/post';
export default {
	mixins: [PostFormMixin],
	components: {
		quillEditor,
	},
	data() {
		return {
			post: {},
		};
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		try {
			await this.$store.dispatch(LOOKUP_FOR_EDIT, this.$route.params.postId);
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
.button_group button {
	margin: 0 5px;
}
</style>
