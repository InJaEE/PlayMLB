<template>
	<div>
		<div v-if="isLoading">
			<loading-spinner></loading-spinner>
		</div>
		<div v-else>
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
			<hitter-stat-list
				:hitterData="hitterList"
				:thData="thList"
				@refresh="fetchHitterRank"
			></hitter-stat-list>
		</div>
	</div>
</template>

<script>
import HitterStatList from './HitterStatList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
	components: {
		HitterStatList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
			hitterList: {},
			season: this.$route.query.season || new Date().getFullYear() - 1,
			statType: this.$route.query.statType || 'hr',
			thList: [
				['타수', 'ab'],
				['타율', 'avg'],
				['타점', 'rbi'],
				['홈런', 'hr'],
				['도루', 'sb'],
				['득점', 'r'],
				['안타', 'h'],
				['2루타', 'd'],
				['3루타', 't'],
				['볼넷', 'bb'],
				['삼진', 'so'],
				['출루율', 'obp'],
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
		async fetchHitterRank() {
			this.isLoading = true;
			let { season, statType } = this.$route.query;
			if (season === undefined) season = new Date().getFullYear() - 1;
			if (statType === undefined) statType = 'hr';
			await this.$store.dispatch('FETCH_HITTER', {
				season,
				statType,
			});
			this.hitterList = this.$store.getters.fetchedHitterRank;
			this.isLoading = false;
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
</style>
