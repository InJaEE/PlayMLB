<template>
	<div class="wrapper">
		<h1>회원가입</h1>
		<div>
			<alert-modal
				:modalInfo="alertModalStatus"
				@closeModal="alertModalStatus.visible = false"
			></alert-modal>
			<form @submit.prevent="signup">
				<div class="id_area" :class="{ focus: this.isIdFocus }">
					<input
						type="text"
						id="username"
						v-model="userId"
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
import AlertModal from '@/components/common/AlertModal.vue';
export default {
	components: {
		AlertModal,
	},
	data() {
		return {
			userId: '',
			nickname: '',
			password: '',
			logMessage: '',
			isIdFocus: false,
			isNickFocus: false,
			isPwdFocus: false,
			alertModalStatus: {
				visible: false,
				title: '타이틀',
				subTitle: '서브타이틀',
				status: 'success',
			},
		};
	},
	methods: {
		focusIdInputBox() {
			this.isIdFocus = !this.isIdFocus;
		},
		focusNickInputBox() {
			this.isNickFocus = !this.isNickFocus;
		},
		focusPwdInputBox() {
			this.isPwdFocus = !this.isPwdFocus;
		},
		async signup() {
			let { userId, nickname, password } = this;
			if (userId.trim() === '') {
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
				userId,
				password,
				nickname,
			};
			try {
				console.log(this.alertModalStatus);
				await this.$store.dispatch('SIGNUP_USER', userData);
				this.alertModalStatus.status = 'success';
				this.alertModalStatus.title = '회원가입을 완료하였습니다.';
				this.alertModalStatus.subTitle = 'PlayMLB에 오신것을 환영합니다!';
				this.alertModalStatus.visible = true;
			} catch (err) {
				const errMsg = err.response.data.msg;
				if (errMsg === 'used nickname') {
					this.alertModalStatus.title = '이미 사용중인 닉네임입니다.';
					this.alertModalStatus.subTitle = '다른 닉네임을 입력해주세요.';
					this.nickname = '';
					this.password = '';
				} else if (errMsg === 'used id') {
					this.alertModalStatus.title = '이미 사용중인 아이디입니다.';
					this.alertModalStatus.subTitle = '다른 아이디를 입력해주세요.';
					this.userId = '';
					this.password = '';
				}
				this.alertModalStatus.status = 'warning';
				this.alertModalStatus.visible = true;
			}
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
