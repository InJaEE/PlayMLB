<template>
	<div>
		<team-player-menu>
			<span slot="team">팀 순위</span>
			<span slot="player">선수 순위</span>
		</team-player-menu>
		<league-menu></league-menu>
		<div class="year">
			<span style="border-bottom: solid 3px #057aff;">2019</span>
			<span>2018</span>
			<span>2017</span>
		</div>
	</div>
</template>

<script>
import TeamPlayerMenu from '../common/TeamPlayerMenu.vue';
import LeagueMenu from '../common/LeagueMenu.vue';
export default {
	components: {
		TeamPlayerMenu,
		LeagueMenu,
	},
};
</script>

<style scoped>
.year span {
	margin: 0 10px 0 10px;
	font-size: 20px;
	color: #777;
}
</style>
