<template>
	<div>
		<header-toggle-menu>
			<span slot="team">타자</span>
			<span slot="player">투수</span>
		</header-toggle-menu>
		<div class="year">
			<span style="border-bottom: solid 3px #057aff;">2019</span>
			<span>2018</span>
			<span>2017</span>
		</div>
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

<style scoped>
.year span {
	margin: 0 10px 0 10px;
	font-size: 20px;
	color: #777;
}
</style>
