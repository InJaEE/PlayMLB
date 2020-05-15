<template>
	<div>
		<info-input></info-input>
		<info-player-card
			:playerList="searchResult"
			v-if="isList"
		></info-player-card>
		<info-player-detail v-else></info-player-detail>
	</div>
</template>

<script>
import InfoInput from '../InfoInput.vue';
import InfoPlayerCard from './InfoPlayerCard.vue';
import InfoPlayerDetail from './InfoPlayerDetail.vue';
export default {
	components: {
		InfoInput,
		InfoPlayerCard,
		InfoPlayerDetail,
	},
	computed: {
		isList() {
			return this.$route.params.detail === undefined ? true : false;
		},
		searchResult() {
			return this.$store.getters.fetchedPlayersInfo;
		},
	},
};
</script>

<style></style>
