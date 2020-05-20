<template>
	<div class="wrapper">
		<h1>회원가입</h1>
		<div>
			<form @submit.prevent="signup">
				<div class="id_area" :class="{ focus: this.isIdFocus }">
					<input
						type="text"
						id="username"
						v-model="username"
						placeholder="아이디"
						class="input_row"
						@focus="focusIdInputBox"
						@blur="focusIdInputBox"
					/>
				</div>
				<div class="id_area" :class="{ focus: this.isNickFocus }">
					<input
						type="text"
						id="nickname"
						v-model="nickname"
						placeholder="닉네임"
						class="input_row"
						@focus="focusNickInputBox"
						@blur="focusNickInputBox"
					/>
				</div>
				<div class="password_area" :class="{ focus: this.isPwdFocus }">
					<input
						type="password"
						id="password"
						v-model="password"
						placeholder="비밀번호"
						class="input_row"
						@focus="focusPwdInputBox"
						@blur="focusPwdInputBox"
					/>
				</div>
				<p class="error">{{ logMessage }}</p>
				<div>
					<button type="submit" class="btn">회원가입</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { signupUser } from '@/api/userApi';
export default {
	data() {
		return {
			username: '',
			nickname: '',
			password: '',
			logMessage: '',
			isIdFocus: false,
			isNickFocus: false,
			isPwdFocus: false,
		};
	},
	methods: {
		focusIdInputBox() {
			this.isIdFocus = !this.isIdFocus;
		},
		focusNickInputBox() {
			this.isIdFocus = !this.isIdFocus;
		},
		focusPwdInputBox() {
			this.isPwdFocus = !this.isPwdFocus;
		},
		async signup() {
			let { username, nickname, password } = this;
			if (username.trim() === '') {
				console.log(username);

				this.logMessage = '아이디를 입력해주세요.';

				return;
			} else if (nickname.trim() === '') {
				this.logMessage = '닉네임을 입력해주세요.';
				return;
			} else if (password.trim() === '') {
				this.logMessage = '비밀번호를 입력해주세요.';
				return;
			}
			const userData = {
				username,
				password,
				nickname,
			};
			const res = await signupUser(userData);
			console.log(res);
		},
		kakaoSignup() {
			alert('준비중입니다.');
		},
	},
};
</script>

<style scoped>
.wrapper {
	background: white;
	border-radius: 3px;
	padding: 15px 15px;
	max-width: 500px;
	margin: 40px auto;
	margin-bottom: 0;
}
.id_area {
	border: solid 1px #dadada;
	padding: 15px 15px 15px 15px;
	margin-bottom: 20px;
}
.password_area {
	border: solid 1px #dadada;
	padding: 15px 15px 15px 15px;
}
.input_row {
	position: relative;
	width: 100%;
	height: 15px;
	border: none;
}
input:focus {
	outline: none;
}
.btn {
	display: block;
	width: 100%;
	height: 61px;
	margin: 30px 0 14px;
	padding-top: 1px;
	border: none;
	border-radius: 0;
	background-color: #041e42;
	cursor: pointer;
	color: white;
	font-size: 20px;
	line-height: 61px;
}
.focus {
	border: solid 1px #041e42;
}
.error {
	color: red;
}
</style>
