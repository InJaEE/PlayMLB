<template>
	<div>
		<main>
			<h3>투수 순위</h3>
			<div class="season">
				<span
					@click="toggleSeason(2019)"
					:class="{ seasonSelected: toggleSeasonClass === 2019 }"
					>2019</span
				>
				<span
					@click="toggleSeason(2018)"
					:class="{ seasonSelected: toggleSeasonClass === 2018 }"
					>2018</span
				>
				<span
					@click="toggleSeason(2017)"
					:class="{ seasonSelected: toggleSeasonClass === 2017 }"
					>2017</span
				>
			</div>
			<player-stat-list
				:playerData="pitcherList"
				:thData="thList"
				@refresh="fetchPitcherRank"
			></player-stat-list>
		</main>
	</div>
</template>

<script>
import PlayerStatList from './PlayerStatList.vue';
import { pitcherHeader } from '@/data/statListTableHeader';
export default {
	components: {
		PlayerStatList,
	},
	data() {
		return {
			pitcherList: {},
			season: new Date().getFullYear() - 1,
			statType: 'era',
			thList: pitcherHeader,
		};
	},
	computed: {
		toggleSeasonClass() {
			let season = this.$route.query.season;
			if (season === undefined) {
				season = new Date().getFullYear() - 1;
			}
			return season;
		},
	},
	methods: {
		async fetchPitcherRank() {
			this.$store.commit('SET_LOADING', true);
			let { season, statType } = this.$route.query;
			if (season === undefined) season = new Date().getFullYear() - 1;
			if (statType === undefined) statType = 'era';
			await this.$store.dispatch('FETCH_PITCHER', {
				season,
				statType,
			});
			this.pitcherList = this.$store.getters.fetchedPitcherRank;
			this.$store.commit('SET_LOADING', false);
		},
		toggleSeason(path) {
			let { statType } = this.$route.query;
			if (statType === undefined) statType = 'era';
			this.$router.push({ query: { season: path, statType } });
			this.fetchPitcherRank();
		},
	},
	created() {
		this.fetchPitcherRank(this.season, this.statType);
	},
};
</script>

<style scoped>
.season span {
	margin: 0 10px 0 10px;
	font-size: 20px;
	color: #777;
	cursor: pointer;
}
.seasonSelected {
	border-bottom: solid 3px #057aff;
}
h3 {
	font-size: 20px;
	font-family: 'Serif';
	font-weight: bold;
}
</style>
