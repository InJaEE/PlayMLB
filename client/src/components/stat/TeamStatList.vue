<template>
	<ul>
		<li v-for="item in teamList" :key="item.mlb_org">
			<img
				width="20px"
				:src="
					`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item[1].mlb_org_id}.svg`
				"
				alt=""
			/>
			{{ item[1].name_display_full }}
		</li>
	</ul>
</template>

<script>
export default {
	props: ['teamList'],
};
</script>

<style scoped>
li {
	list-style-type: none;
	height: 50px;
}
</style>
