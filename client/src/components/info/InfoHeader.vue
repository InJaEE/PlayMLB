<template>
	<div>
		<team-player-menu>
			<span slot="team">팀 정보</span>
			<span slot="player">선수 정보</span>
		</team-player-menu>
	</div>
</template>

<script>
import TeamPlayerMenu from '../common/TeamPlayerMenu.vue';
export default {
	components: {
		TeamPlayerMenu,
	},
};
</script>

<style></style>
