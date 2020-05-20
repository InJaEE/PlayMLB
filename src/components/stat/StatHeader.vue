<template>
	<div>
		<header-toggle-menu>
			<span slot="team">타자</span>
			<span slot="player">투수</span>
		</header-toggle-menu>
	</div>
</template>

<script>
import HeaderToggleMenu from '../common/HeaderToggleMenu.vue';
export default {
	components: {
		HeaderToggleMenu,
	},
};
</script>

<style scoped></style>
