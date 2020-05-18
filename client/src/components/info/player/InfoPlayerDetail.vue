<template>
	<div>
		<info-player-detail-card
			:playerDetail="playerDetail"
		></info-player-detail-card>
		<info-player-detail-pitcher-stat
			:stat="playerSeasonStat"
			v-if="playerPosition"
		></info-player-detail-pitcher-stat>
		<info-player-detail-hitter-stat
			:stat="playerSeasonStat"
			v-else
		></info-player-detail-hitter-stat>
	</div>
</template>

<script>
import InfoPlayerDetailCard from '@/components/info/player/InfoPlayerDetailCard.vue';
import InfoPlayerDetailHitterStat from '@/components/info/player/InfoPlayerDetailHitterStat.vue';
import InfoPlayerDetailPitcherStat from '@/components/info/player/InfoPlayerDetailPitcherStat.vue';
export default {
	components: {
		InfoPlayerDetailCard,
		InfoPlayerDetailHitterStat,
		InfoPlayerDetailPitcherStat,
	},
	data() {
		return {
			//playerDetail: [],
			//seasonStat: [],
		};
	},
	computed: {
		playerPosition() {
			const { position } = this.$store.getters.fetchedPlayerDetail;
			if (position === '투수') {
				return true;
			} else {
				return false;
			}
		},
		playerDetail() {
			return this.$store.getters.fetchedPlayerDetail;
		},
		playerSeasonStat() {
			return this.$store.getters.fetchedPlayerSeasonStat;
		},
	},
	async created() {
		this.$store.commit('SET_LOADING', true);

		this.$store.commit('RESET_PLAYER_DETAIL');
		await this.$store.dispatch('FETCH_PLAYER_DATA', this.$route.params.detail);

		const playerId = this.$route.params.detail;
		const debutDate = new Date(
			this.$store.getters.fetchedPlayerDetail.debutDate,
		).getFullYear();

		let dispatchName = '';
		if (this.playerPosition) {
			dispatchName = 'FETCH_PITCHER_SEASON_STAT';
		} else {
			dispatchName = 'FETCH_HITTER_SEASON_STAT';
		}
		await this.$store.dispatch(dispatchName, {
			playerId,
			from: debutDate,
			to: new Date().getFullYear() - 1,
		});

		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style></style>
