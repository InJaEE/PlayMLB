<template>
  <header class="header">
    <div class="logoContent">
      <img src="../assets/mlbLogo.png" width="80" height="40" alt="PlayMLB">
      <router-link to="/" class="mainTitle">PlayMLB</router-link>
    </div>
    <div class="menu">
      <router-link to="/board">
        게시판
      </router-link>
      <router-link to="/stat">
        기록실
      </router-link>
      <router-link to="/info">
        정보
      </router-link>
    </div>
    <div class="navigations">
      <template>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  color: white;
}
.header {
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #041e42;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  color: white;
}
.logoContent {
  display: table;
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
  vertical-align: middle;
}
.menu > a {
  margin-right: 50px;
}
</style>