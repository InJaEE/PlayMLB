<template>
	<div class="contents">
		<input-form>
			<h1 slot="header">회원가입</h1>
			<div slot="btn">
				<div>
					<button type="submit" class="btn">회원가입</button>
				</div>
				<div>
					<button class="kakaoBtn">카카오로 회원가입</button>
				</div>
			</div>
		</input-form>
	</div>
</template>

<script>
import InputForm from '@/components/user/InputForm.vue';
export default {
	components: {
		InputForm,
	},
};
</script>

<style></style>
