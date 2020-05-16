<template>
	<div>
		<div>
			<info-input></info-input>
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
import { isEmpty } from '@/utils/check';
export default {
	components: {
		InfoInput,
		InfoPlayerCard,
		InfoPlayerDetail,
	},

	computed: {
		isList() {
			return this.$route.params.detail === undefined ? true : false;
		},
		searchResult() {
			return this.$store.getters.fetchedPlayersInfo;
		},
	},
	methods: {
		toggleLoading() {
			console.log(this.isLoading);
			this.isLoading = !this.isLoading;
		},
	},
	async created() {
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
			//console.error(err);
			this.$router.push('/info/player');
		}
	},
};
</script>

<style></style>
