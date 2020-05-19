<template>
	<div class="wrapper">
		<h1>로그인</h1>
		<div>
			<form @submit.prevent="localLogin">
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
				<p class="error">
					{{ logMessage }}
				</p>
				<div>
					<button type="submit" class="btn">로그인</button>
				</div>
			</form>
			<div>
				<!--<button class="kakaoBtn" @click="kakaoLogin">카카오로 로그인</button>-->
				<KakaoLogin
					:api-key="kakaoKey"
					image="kakao_account_login_btn_medium_wide"
					:on-success="onSuccess"
					:on-failure="onFailure"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/userApi';
import KakaoLogin from 'vue-kakao-login';

let onSuccess = async data => {
	console.log(data);
	console.log('success');
};
let onFailure = data => {
	console.log(data);
	console.log('failure');
};
export default {
	components: {
		KakaoLogin,
	},
	data() {
		return {
			kakaoKey: process.env.VUE_APP_KAKAO_JS_KEY,
			username: '',
			password: '',
			isIdFocus: false,
			isPwdFocus: false,
			logMessage: '',
		};
	},
	methods: {
		onSuccess,
		onFailure,
		focusIdInputBox() {
			this.isIdFocus = !this.isIdFocus;
		},
		focusPwdInputBox() {
			this.isPwdFocus = !this.isPwdFocus;
		},
		async localLogin() {
			const { username, password } = this;
			if (username.trim() === '') {
				this.logMessage = '아이디를 입력해주세요.';
				return;
			} else if (password.trim() === '') {
				this.logMessage = '비밀번호를 입력해주세요.';
				return;
			}
			const userData = {
				username,
				password,
			};
			const res = await loginUser(userData);
			console.log(res);
		},
		kakaoLogin() {
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
.kakaoBtn {
	width: 100%;
	/*background-color: #ffeb00;*/
	height: 50px;
	margin: 0 0 14px;
	font-size: 20px;
	border: none;
	max-width: 500px;
}
.error {
	color: red;
}
</style>
