<template>
	<div class="input">
		<div class="search_area" :class="{ focus: this.isSearchFocus }">
			<input
				type="text"
				id="username"
				placeholder="선수 이름을 입력해주세요."
				class="input_row"
				@focus="focusInputBox"
				@blur="focusInputBox"
				@keyup.enter="search"
				ref="input"
				v-model="searchWord"
				maxlength="15"
			/>
			<i class="fas fa-search searchBtn" @click="search"></i>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchWord: '',
			isSearchFocus: false,
		};
	},
	methods: {
		async search() {
			if (this.searchWord.length < 3) {
				alert('검색어는 3글자 이상 입력해주세요.');
				return;
			}
			// 검색어 store에 입력
			this.$store.commit('SET_SEARCH_WORD', this.searchWord);
			// 검색어로 선수ID를 검색하여 store에 저장
			await this.$store.dispatch(
				'FETCH_PLAYER_ID',
				this.$store.getters.fetchedSearchWord,
			);
			// store에 저장된 선수ID로 선수들의 데이터를 store에 저장
			await this.$store.dispatch(
				'FETCH_PLAYERS_DATA',
				this.$store.getters.fetchedPlayerIdList,
			);
			this.$router.push({
				path: '/info/player',
				query: { keyword: this.searchWord },
			});
		},
		focusInputBox() {
			this.isSearchFocus = !this.isSearchFocus;
		},
	},
};
</script>

<style scoped>
.input {
	margin: 30px 0;
}
.search_area {
	border: solid 1px #dadada;
	padding: 10px 10px;
	width: 30%;
	margin: 0 auto;
}
.input_row {
	position: relative;
	width: 80%;
	height: 15px;
	border: none;
}
input:focus {
	outline: none;
}
.focus {
	border: solid 1px #041e42;
}
.searchBtn {
	cursor: pointer;
}
</style>
