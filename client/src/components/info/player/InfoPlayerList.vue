<template>
	<div>
		<info-input></info-input>
		<info-player-card :playerList="searchResult"></info-player-card>
	</div>
</template>

<script>
import InfoInput from '../InfoInput.vue';
import InfoPlayerCard from './InfoPlayerCard.vue';
export default {
	components: {
		InfoInput,
		InfoPlayerCard,
	},
	computed: {
		testPlayerId() {
			return this.$store.getters.fetchedPlayerIdList;
		},
		searchResult() {
			return this.$store.getters.fetchedPlayersInfo;
		},
	},
};
</script>

<style></style>
