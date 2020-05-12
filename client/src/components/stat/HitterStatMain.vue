<template>
	<div>
		<div>
			<h3>타자</h3>
			<hitter-stat-list :hitterData="hitter"></hitter-stat-list>
		</div>
	</div>
</template>

<script>
import HitterStatList from './HitterStatList.vue';
import { getHitterRank } from '@/api/statApi';
export default {
	components: {
		HitterStatList,
	},
	data() {
		return {
			hitter: '',
		};
	},
	methods: {
		async tempHitterRank() {
			const res = await getHitterRank(2019, 'hr');
			this.hitter =
				res.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row;
		},
	},
	created() {
		this.tempHitterRank();
	},
};
</script>

<style></style>
