<template>
	<div>
		<div v-if="isLoading">
			<loading-spinner></loading-spinner>
		</div>
		<div v-else>
			<h3>투수 순위</h3>
			<div class="season">
				<router-link to="?season=2019">
					<span style="border-bottom: solid 3px #057aff;">2019</span>
				</router-link>
				<router-link to="?season=2018">
					<span>2018</span>
				</router-link>
				<router-link to="?season=2017">
					<span>2017</span>
				</router-link>
			</div>
			<pitcher-stat-list :pitcherData="pitcherList"></pitcher-stat-list>
		</div>
	</div>
</template>

<script>
import PitcherStatList from './PitcherStatList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { getPitcherRank } from '@/api/statApi';
export default {
	components: {
		PitcherStatList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
			pitcherList: '',
			statType: 'era',
			season: new Date().getFullYear() - 1,
		};
	},
	methods: {
		async fetchPitcherRank(season, statType) {
			this.isLoading = true;
			const res = await getPitcherRank(season, statType);
			this.pitcherList =
				res.data.leader_pitching_repeater.leader_pitching_mux.queryResults.row;
			this.isLoading = false;
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
}
</style>
