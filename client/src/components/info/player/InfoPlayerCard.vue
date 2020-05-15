<template>
	<div>
		<div class="card" v-for="(item, index) in playerList" :key="index">
			<div class="card_wrapper">
				<div class="img_wrapper">
					<img
						class="player_img"
						:src="
							`https://securea.mlb.com/mlb/images/players/head_shot/${item.playerId}.jpg`
						"
						alt="player_img"
						onerror="this.src='https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'"
					/>
				</div>
				<div class="data_wrapper">
					<router-link :to="`/info/player/${item.playerId}`">
						<div class="name_wrapper">
							<span class="player team">
								<img
									:src="
										`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item.teamId}.svg`
									"
									alt="team_img"
								/>
							</span>
							<h2 class="player name">
								{{ item.name }} #{{ item.backNumber || 'N/A' }}
							</h2>
						</div>
					</router-link>
					<div class="player_info">
						<span>
							포지션: {{ item.position || 'N/A' }} | 나이:
							{{ item.age || 'N/A' }} | 출생:
							{{ item.country || 'N/A' }}
						</span>
					</div>
				</div>
			</div>
		</div>
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
	border-radius: 20px 20px;
	border: 1px solid black;
	position: relative;
	width: 50%;
	margin: 0 auto;
	overflow: hidden;
	margin-bottom: 30px;
}
.player {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
	margin-left: 20px;
	margin-top: 30px;
}
.name {
	text-align: left;
}
.team {
	width: 30px;
	text-align: left;
}
.img_wrapper {
	width: 20%;
	float: left;
}
.data_wrapper {
	width: 80%;
	float: right;
}
.player_img {
	display: flex;
	width: 100%;
	border-radius: 20px 0 0 20px;
	min-height: 137px;
	min-width: 50px;
}
.name_wrapper {
	display: flex;
}
.player_info {
	display: grid;
	margin: 20px 20px;
	font-size: 20px;
}
</style>
