<template>
	<div class="contents">
		<h1>글 작성하기</h1>
		<quill-editor
			class="input_contents"
			@changeContents="changeContents"
			@changeTitle="titleChange"
		></quill-editor>
		<div class="button_group">
			<a-button type="primary" @click="submitForm">글 작성</a-button>
			<a-button type="danger" @click="goBack">뒤로가기</a-button>
		</div>
	</div>
</template>

<script>
import PostFormMixin from '@/mixins/PostFormMixin.vue';
import quillEditor from '@/components/post/write/QuillEditor.vue';

export default {
	mixins: [PostFormMixin],
	components: {
		quillEditor,
	},
	methods: {
		goBack() {
			if (this.post.contents.length > 0) {
				if (!confirm('정말 뒤로가시겠습니까?')) {
					return;
				}
			}
			this.$router.go(-1);
		},
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
