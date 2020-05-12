<template>
	<div>
		<ul class="cardList">
			<li v-for="item in teamList" :key="item.mlb_org" class="card">
				<div>
					<img
						width="50px"
						height="50px"
						:src="
							`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item[1].mlb_org_id}.svg`
						"
						:alt="item[1].name_display_full"
					/><br />
					<h4>{{ item[1].name_display_full }}</h4>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['teamList'],
};
</script>

<style scoped>
li {
	list-style-type: none;
}
.cardList {
	display: flex;
	padding: 0 10px;
}
.card {
	margin: 0 10px;
	width: 100%;
}
</style>
