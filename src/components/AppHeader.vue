<template>
	<header>
		<div class="header">
			<div class="logoContent">
				<img src="../assets/mlbLogo.png" width="80" height="40" alt="PlayMLB" />
				<router-link to="/" class="mainTitle">PlayMLB</router-link>
			</div>
			<div class="menu">
				<div
					class="menuItem"
					:class="{ selected: toggleMenu.includes('board') }"
				>
					<router-link to="/post">
						게시판
					</router-link>
				</div>
				<div
					class="menuItem"
					:class="{ selected: toggleMenu.includes('info') }"
				>
					<router-link to="/info">
						정보실
					</router-link>
				</div>
				<div
					class="menuItem"
					:class="{ selected: toggleMenu.includes('stat') }"
				>
					<router-link to="/stat">
						기록실
					</router-link>
				</div>
				<div
					class="menuItem"
					:class="{ selected: toggleMenu.includes('about') }"
				>
					<router-link to="/about">
						About
					</router-link>
				</div>
			</div>
			<div class="navigations">
				<template v-if="this.$store.getters.isLogin">
					<span class="user_name">
						{{ this.$store.getters.getUserData.nickname }}님
					</span>
					<span>
						<router-link to="/userinfo">회원정보</router-link>
					</span>
					<span @click="logout">
						<a style="cursor:pointer">로그아웃</a>
					</span>
				</template>
				<template v-else>
					<router-link to="/login">로그인</router-link>
					<router-link to="/signup">회원가입</router-link>
				</template>
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
			//alert('로그아웃 되었습니다.');
			this.$router.push('/main');
		},
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
.navigations a {
	margin-left: 10px;
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
.menu {
	display: flex;
}
.menuItem {
	margin: 0 20px 0 20px;
	padding: 15px 0;
}
.selected {
	border-bottom: 5px solid #057aff;
}
.user_name {
	font-size: 12px;
}
</style>
