<template>
	<div class="card">
		<div>
			<img
				class="player_img"
				:src="`https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg`"
				alt="player_img"
			/>
			<div>
				<span class="player team">
					<img
						src="https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg"
						alt=""
					/>
				</span>
				<span class="player name">
					Mike Trout
				</span>
				<span class="player">
					스탯
				</span>
			</div>
		</div>
		<h3 v-for="(item, index) in playerList" :key="index">
			{{ index + 1 }}
			{{ item.이름 }}
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		playerList: Array,
	},
};
</script>

<style scoped>
.card {
	width: 50%;
	margin: 0 auto;
}
.player {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
}
.name {
	text-align: left;
	padding-left: 10px;
}
.team {
	width: 30px;
	text-align: left;
}
.player_img {
	width: 100px;
	height: 150px;
	float: left;
	border-radius: 20px 20px;
	margin-right: 20px;
}
</style>
