<template>
	<div>
		<main>
			<h3>타자 순위</h3>
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
				:playerData="hitterList"
				:thData="thList"
				@refresh="fetchHitterRank"
			></player-stat-list>
		</main>
	</div>
</template>

<script>
import PlayerStatList from './PlayerStatList.vue';
import { hitterHeader } from '@/data/statListTableHeader';
export default {
	components: {
		PlayerStatList,
	},
	data() {
		return {
			hitterList: {},
			season: this.$route.query.season || new Date().getFullYear() - 1,
			statType: this.$route.query.statType || 'hr',
			thList: hitterHeader,
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
		async fetchHitterRank() {
			this.$store.commit('SET_LOADING', true);
			let { season, statType } = this.$route.query;
			if (season === undefined) season = new Date().getFullYear() - 1;
			if (statType === undefined) statType = 'hr';
			await this.$store.dispatch('FETCH_HITTER', {
				season,
				statType,
			});
			this.hitterList = this.$store.getters.fetchedHitterRank;
			this.$store.commit('SET_LOADING', false);
		},
		toggleSeason(path) {
			let { statType } = this.$route.query;
			if (statType === undefined) statType = 'hr';
			this.$router.push({ query: { season: path, statType } });
			this.fetchHitterRank();
		},
	},
	created() {
		this.fetchHitterRank();
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
