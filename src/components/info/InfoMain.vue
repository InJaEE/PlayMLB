<template>
	<div>
		<info-header></info-header>
		<div v-show="loadingCheck">
			<loading-spinner></loading-spinner>
		</div>
		<div v-show="!loadingCheck">
			<div v-if="checkRoute">
				<info-team-main></info-team-main>
			</div>
			<div v-else>
				<player-list></player-list>
			</div>
		</div>
	</div>
</template>

<script>
import InfoHeader from './InfoHeader.vue';
import InfoTeamMain from './team/InfoTeamMain.vue';
import PlayerList from './player/InfoPlayerList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
	components: {
		InfoHeader,
		InfoTeamMain,
		PlayerList,
		LoadingSpinner,
	},
	computed: {
		loadingCheck() {
			return this.$store.getters.getLoading;
		},
		checkRoute() {
			let param =
				this.$route.params.type === undefined ? '' : this.$route.params.type;
			return param.includes('player') ? false : true;
		},
	},
};
</script>

<style></style>
