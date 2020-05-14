<template>
	<div class="input">
		<div class="search_area" :class="{ focus: this.isSearchFocus }">
			<input
				type="text"
				id="username"
				placeholder="검색어"
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
			this.$store.commit('SET_SEARCH_WORD', this.searchWord);
			await this.$store.dispatch(
				'FETCH_PLAYER_ID',
				this.$store.getters.fetchedSearchWord,
			);

			this.$store.dispatch(
				'FETCH_PLAYERS_DATA',
				this.$store.getters.fetchedPlayerIdList,
			);
			this.$router.push({ query: { keyword: this.searchWord } });
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
