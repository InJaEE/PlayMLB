<template>
	<header>
		<div class="header">
			<div class="logoContent">
				<img src="../assets/mlbLogo.png" width="80" height="40" alt="PlayMLB" />
				<router-link to="/" class="mainTitle">PlayMLB</router-link>
			</div>
			<ul class="nav">
				<li :class="{ selected: toggleMenu.includes('post') }">
					<router-link to="/post">
						게시판
					</router-link>
				</li>
				<li :class="{ selected: toggleMenu.includes('info') }">
					<router-link to="/info">
						정보실
					</router-link>
				</li>
				<li :class="{ selected: toggleMenu.includes('stat') }">
					<router-link to="/stat">
						기록실
					</router-link>
				</li>
				<li :class="{ selected: toggleMenu.includes('about') }">
					<router-link to="/about">
						About
					</router-link>
				</li>
			</ul>
			<ul class="userNav">
				<template v-if="this.$store.getters.isLogin">
					<li class="user_name">
						{{ this.$store.getters.getUserData.nickname }}님
					</li>
					<li @click="logout">
						<a>로그아웃</a>
					</li>
				</template>
				<template v-else>
					<li>
						<router-link to="/login">로그인</router-link>
					</li>
					<li>
						<router-link to="/signup">회원가입</router-link>
					</li>
				</template>
			</ul>
			<div class="nav_toggleBtn" @click="clickNavToggleBtn">
				<i class="fas fa-bars"></i>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		toggleMenu() {
			return this.$route.name == undefined ? '' : this.$route.name;
		},
	},
	methods: {
		logout() {
			this.$store.commit('SET_LOADING', true);
			this.$store.commit('LOGOUT_USER');
			this.$store.commit('SET_LOADING', false);
			location.replace('/');
		},
		clickNavToggleBtn() {
			document.querySelector('.userNav').classList.toggle('active');
			document.querySelector('.nav').classList.toggle('active');
		},
	},
	created() {
		this.$store.commit('SET_LOADING', true);
		setTimeout(() => {
			this.$store.commit('SET_LOADING', false);
		}, 500);
	},
};
</script>

<style scoped>
a {
	color: white;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	background-color: #041e42;
	color: white;
	margin-bottom: 20px;
}
.logoContent {
	display: table;
	padding: 5px 0;
}
.userNav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
}
ul li {
	margin: 0 20px 0 20px;
	padding: 15px 0;
}
.mainTitle {
	font-size: 25px;
	padding-left: 10px;
	display: table-cell;
	vertical-align: middle;
}
img {
	display: table-cell;
}
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
}
.selected {
	border-bottom: 5px solid #057aff;
}
.user_name {
	font-size: 12px;
}
.nav_toggleBtn {
	position: absolute;
	right: 20px;
	top: 10px;
	display: none;
	font-size: 20px;
	cursor: pointer;
}
@media screen and (max-width: 790px) {
	.header {
		flex-direction: column;
	}
	.nav {
		display: none;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.userNav {
		display: none;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.nav_toggleBtn {
		display: block;
	}
	.nav.active,
	.userNav.active {
		display: flex;
	}
	.userNav.active {
		flex-direction: row;
		justify-content: center;
	}
}
</style>
