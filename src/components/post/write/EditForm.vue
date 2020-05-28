<template>
	<div class="contents">
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
import { notification } from 'ant-design-vue';
export default {
	data() {
		return {
			post: {},
		};
	},
	methods: {
		async submitForm() {
			const titleLeng = this.post.title.length;
			const contentsLeng = this.post.contents.length;
			if (titleLeng > 20) {
				notification.open({
					message: '글 제목은 30자를 넘을 수 없습니다.',
					icon: <a-icon type="warning" style="color: red" />,
				});
				return;
			}
			if (contentsLeng > 1000) {
				notification.open({
					message: '글 내용은 1000자를 넘을 수 없습니다.',
					icon: <a-icon type="warning" style="color: red" />,
				});
				return;
			}
			if (!titleLeng) {
				alert('제목을 입력해주세요');
				return;
			}
			if (!contentsLeng) {
				alert('내용을 입력해주세요');
				return;
			}
			const submitData = {
				title: this.post.title,
				contents: this.post.contents,
			};
			await this.$store.dispatch('EDIT_POST', {
				number: this.$route.params.postId,
				data: submitData,
			});
			this.$router.push('/post');
		},
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
