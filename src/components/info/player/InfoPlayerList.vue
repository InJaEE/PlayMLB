<template>
	<div>
		<info-input></info-input>
		<div v-if="isEmpty(searchResult) && isList">
			<info-player-empty></info-player-empty>
		</div>
		<div v-else>
			<info-player-card
				:playerList="searchResult"
				v-if="isList"
			></info-player-card>
			<info-player-detail v-else></info-player-detail>
		</div>
	</div>
</template>

<script>
import InfoInput from '../InfoInput.vue';
import InfoPlayerCard from './InfoPlayerCard.vue';
import InfoPlayerDetail from './InfoPlayerDetail.vue';
import InfoPlayerEmpty from './InfoPlayerEmpty.vue';
import { isEmpty } from '@/utils/check';
export default {
	components: {
		InfoInput,
		InfoPlayerCard,
		InfoPlayerDetail,
		InfoPlayerEmpty,
	},
	data() {
		return {
			isEmpty,
		};
	},
	computed: {
		loadingCheck() {
			return this.$store.getters.getLoading;
		},
		isList() {
			return this.$route.params.detail === undefined ? true : false;
		},
		searchResult() {
			return this.$store.getters.fetchedPlayersInfo;
		},
	},
	async created() {
		this.$store.commit('SET_LOADING', true);
		this.$store.commit('RESET_PLAYER_LIST');
		// 새로고침했을때 query값으로 데이터 불러오기
		try {
			if (!isEmpty(this.$route.query)) {
				const { keyword } = this.$route.query;
				await this.$store.dispatch('FETCH_PLAYER_ID', keyword);
				await this.$store.dispatch(
					'FETCH_PLAYERS_DATA',
					this.$store.getters.fetchedPlayerIdList,
				);
			}
		} catch (err) {
			this.$router.push('/info/player');
		} finally {
			this.$store.commit('SET_LOADING', false);
		}
	},
};
</script>

<style></style>
