<template>
	<div class="contents">
		<a-input placeholder="제목" v-model="title"></a-input>
		<a-textarea
			placeholder="내용"
			:rows="10"
			v-model="contents"
			style="resize:none"
		/>
		<a-button type="primary" @click="submitForm">글 작성</a-button>
		<a-button type="danger" @click="goBack">뒤로가기</a-button>
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
			// console.log('!@', this.$store.getters.getUserData);

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

<style></style>
