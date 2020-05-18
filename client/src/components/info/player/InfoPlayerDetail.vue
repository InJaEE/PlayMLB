<template>
	<div>
		<info-player-detail-card></info-player-detail-card>
		<info-player-detail-stat></info-player-detail-stat>
	</div>
</template>

<script>
import InfoPlayerDetailCard from '@/components/info/player/InfoPlayerDetailCard.vue';
import InfoPlayerDetailStat from '@/components/info/player/InfoPlayerDetailStat.vue';
export default {
	components: {
		InfoPlayerDetailCard,
		InfoPlayerDetailStat,
	},
};
</script>

<style></style>
