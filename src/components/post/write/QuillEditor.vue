<template>
	<div>
		<a-input
			placeholder="제목"
			v-model="title"
			class="input_title"
			@change="titleChange"
		></a-input>
		<quill-editor
			v-model="content"
			ref="myQuillEditor"
			:options="editorOption"
			@change="onEditorChange($event)"
			class="input_contents"
		>
		</quill-editor>
	</div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
import { LOOKUP_FOR_EDIT } from '@/store/module/post';

export default {
	components: {
		quillEditor,
	},
	data() {
		return {
			title: '',
			content: '',
			editorOption: {
				// some quill options
				placeholder: '내용을 입력해주세요.',
			},
		};
	},
	methods: {
		onEditorChange({ quill, html, text }) {
			this.$emit('changeContents', html);
		},
		titleChange() {
			this.$emit('changeTitle', this.title);
		},
	},
	computed: {
		editor() {
			return this.$refs.myQuillEditor.quill;
		},
	},
	async created() {
		if (this.$route.name === 'postEdit') {
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
			this.content = this.$store.getters.getPost.contents;
			this.title = this.$store.getters.getPost.title;
		}
	},
};
</script>
<style>
.ql-editor {
	height: 30rem;
}
.input_contents {
	resize: none;
	margin: 10px 0 30px 0;
}
</style>
