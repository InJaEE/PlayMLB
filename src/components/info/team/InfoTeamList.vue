<template>
	<div>
		<ul class="cardList">
			<li v-for="item in teamList" :key="item.mlb_org" class="card">
				<div @click="moveToClubPage(item[1].name)" class="urlLink">
					<img
						width="50px"
						height="50px"
						:src="
							`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item[1].mlb_org_id}.svg`
						"
						:alt="item[1].name_display_full"
						class="clubImg"
					/>
					<h4 class="teamName">
						{{ item[1].name_display_full }}
					</h4>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		teamList: Array,
	},
	methods: {
		moveToClubPage(url) {
			url = url.toLowerCase().replace(/(\s*)/g, '');
			window.open(`https://www.mlb.com/${url}`, '_blank');
		},
	},
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
.urlLink {
	margin-top: 20px;
	cursor: pointer;
}
.teamName {
	color: #2b2ba5;
}
.clubImg {
	margin-bottom: 10px;
}
</style>
