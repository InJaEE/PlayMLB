<template>
	<div class="contents">
		<h1>글 작성하기</h1>
		<div>
			<a-input placeholder="제목" v-model="title" class="input_title"></a-input>
		</div>
		<a-textarea
			placeholder="내용"
			:rows="10"
			class="input_contents"
			v-model="contents"
		>
		</a-textarea>
		<div class="button_group">
			<a-button type="primary" @click="submitForm">글 작성</a-button>
			<a-button type="danger" @click="goBack">뒤로가기</a-button>
		</div>
	</div>
</template>

<script>
import { notification } from 'ant-design-vue';
export default {
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	methods: {
		async submitForm() {
			const titleLeng = this.title.length;
			const contentsLeng = this.contents.length;
			if (titleLeng > 500) {
				notification.open({
					message: '글 제목은 50자를 넘을 수 없습니다.',
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
				title: this.title,
				contents: this.contents,
			};
			try {
				await this.$store.dispatch('CREATE_POST', submitData);
			} catch (err) {
				alert('글 작성에 실패하였습니다.');
				console.error(err);
			}
			this.$router.push('/post');
		},
		goBack() {
			if (this.contents.length > 0) {
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
