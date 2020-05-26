<template>
	<div class="contents">
		<a-input placeholder="제목" v-model="title" class="input_title"></a-input>
		<a-textarea
			placeholder="내용"
			:rows="10"
			v-model="contents"
			class="input_contents"
		/>
		<div></div>
		<div class="button_group">
			<a-button type="primary" @click="submitForm">글 작성</a-button>
			<a-button type="danger" @click="goBack">뒤로가기</a-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	methods: {
		async submitForm() {
			if (this.title.length > 20) {
				alert('글 제목은 30자를 넘을 수 없습니다.');
				return;
			}
			if (this.contents.length > 300) {
				alert('글 내용은 300자를 넘을 수 없습니다.');
				return;
			}

			const submitData = {
				title: this.title,
				contents: this.contents,
				createdBy: this.$store.getters.getUserData.nickname,
			};
			await this.$store.dispatch('CREATE_POST', submitData);
			this.$router.push('/post');
		},
		goBack() {
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
