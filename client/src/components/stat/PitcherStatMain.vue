<template>
	<div>
		<div>
			<h3>투수</h3>
			<pitcher-stat-list :pitcherData="pitcher"></pitcher-stat-list>
		</div>
	</div>
</template>

<script>
import PitcherStatList from './PitcherStatList.vue';
import { getPitcherRank } from '@/api/statApi';
export default {
	components: {
		PitcherStatList,
	},
	data() {
		return {
			pitcher: '',
		};
	},
	methods: {
		async tempPitcherRank() {
			const res = await getPitcherRank(2019, 'era');
			this.pitcher =
				res.data.leader_pitching_repeater.leader_pitching_mux.queryResults.row;
		},
	},
	created() {
		this.tempPitcherRank();
	},
};
</script>

<style></style>
