<template>
	<div>
		<header-toggle-menu>
			<span slot="team">팀 정보</span>
			<span slot="player">선수 정보</span>
		</header-toggle-menu>
	</div>
</template>

<script>
import HeaderToggleMenu from '@/components/common/HeaderToggleMenu.vue';
export default {
	components: {
		HeaderToggleMenu,
	},
};
</script>

<style></style>
