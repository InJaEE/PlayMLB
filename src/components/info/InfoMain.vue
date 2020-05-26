<template>
	<div>
		<info-header></info-header>
		<div v-if="checkRoute">
			<info-team-main></info-team-main>
		</div>
		<div v-else>
			<player-list></player-list>
		</div>
	</div>
</template>

<script>
import InfoHeader from './InfoHeader.vue';
import InfoTeamMain from './team/InfoTeamMain.vue';
import PlayerList from './player/InfoPlayerList.vue';

export default {
	components: {
		InfoHeader,
		InfoTeamMain,
		PlayerList,
	},
	computed: {
		checkRoute() {
			let param =
				this.$route.params.type === undefined ? '' : this.$route.params.type;
			return param.includes('player') ? false : true;
		},
	},
};
</script>

<style></style>
