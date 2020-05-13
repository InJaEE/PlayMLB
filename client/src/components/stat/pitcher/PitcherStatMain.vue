<template>
	<div>
		<div v-if="isLoading">
			<loading-spinner></loading-spinner>
		</div>
		<div v-else>
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
			<pitcher-stat-list
				:pitcherData="pitcherList"
				:thData="thList"
				@refresh="fetchPitcherRank"
			></pitcher-stat-list>
		</div>
	</div>
</template>

<script>
import PitcherStatList from './PitcherStatList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
	components: {
		PitcherStatList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
			pitcherList: {},
			season: new Date().getFullYear() - 1,
			statType: 'era',
			thList: [
				['승', 'w'],
				['패', 'l'],
				['세이브', 'sv'],
				['평균자책', 'era'],
				['탈삼진', 'so'],
				['이닝', 'ip'],
				['피안타', 'h'],
				['피홈런', 'hr'],
				['볼넷', 'bb'],
				['경기수', 'g'],
			],
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
			this.isLoading = true;
			let { season, statType } = this.$route.query;
			if (season === undefined) season = new Date().getFullYear() - 1;
			if (statType === undefined) statType = 'era';
			await this.$store.dispatch('FETCH_PITCHER', {
				season,
				statType,
			});
			this.pitcherList = this.$store.getters.fetchedPitcherRank;
			this.isLoading = false;
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
</style>
