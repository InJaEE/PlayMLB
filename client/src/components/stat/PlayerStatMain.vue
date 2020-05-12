<template>
	<div>
		<div>
			<h3>타자</h3>
			<hitter-stat-list :hitterData="hitter"></hitter-stat-list>
		</div>
		<div>
			<h3>투수</h3>
			<pitcher-stat-list :pitcherData="pitcher"></pitcher-stat-list>
		</div>
	</div>
</template>

<script>
import HitterStatList from './HitterStatList.vue';
import PitcherStatList from './PitcherStatList.vue';
import { getHitterRank, getPitcherRank } from '@/api/statApi';
export default {
	components: {
		HitterStatList,
		PitcherStatList,
	},
	data() {
		return {
			hitter: '',
			pitcher: '',
		};
	},
	methods: {
		async tempHitterRank() {
			const res = await getHitterRank(2019, 'hr');
			this.hitter =
				res.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row;
		},
		async tempPitcherRank() {
			const res = await getPitcherRank(2019, 'era');
			this.pitcher =
				res.data.leader_pitching_repeater.leader_pitching_mux.queryResults.row;
		},
	},

	created() {
		this.tempHitterRank();
		this.tempPitcherRank();
	},
};
</script>

<style></style>
