<template>
	<div class="contents">
		<stat-header></stat-header>
		<div v-if="currentPage">
			<pitcher-stat></pitcher-stat>
		</div>
		<div v-else>
			<hitter-stat></hitter-stat>
		</div>
	</div>
</template>

<script>
import StatHeader from '@/components/stat/StatHeader.vue';
import HitterStat from '@/components/stat/HitterStat.vue';
import PitcherStat from '@/components/stat/PitcherStat.vue';
export default {
	components: {
		StatHeader,
		HitterStat,
		PitcherStat,
	},
	computed: {
		currentPage() {
			const headerToggleData =
				this.$route.params.type === 'pitcher' ? true : false;
			return headerToggleData;
		},
	},
};
</script>

<style></style>
