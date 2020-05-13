<template>
	<div class="contents">
		<stat-header></stat-header>
		<div v-if="currentPage">
			<pitcher-stat-main></pitcher-stat-main>
		</div>
		<div v-else>
			<hitter-stat-main></hitter-stat-main>
		</div>
	</div>
</template>

<script>
import StatHeader from '@/components/stat/StatHeader.vue';
import HitterStatMain from '@/components/stat/hitter/HitterStatMain.vue';
import PitcherStatMain from '@/components/stat/pitcher/PitcherStatMain.vue';
export default {
	components: {
		StatHeader,
		HitterStatMain,
		PitcherStatMain,
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
