<template>
	<div>
		<div class="player_card">
			<div class="player_img">
				<img
					:src="
						`https://securea.mlb.com/mlb/images/players/head_shot/${playerDetail.playerId}.jpg`
					"
					:alt="playerDetail.name"
					@error="imgError"
				/>
			</div>
			<ul>
				<li>
					<strong>이름: </strong>
					<span>{{ playerDetail.name }}</span>
				</li>
				<li>
					<a
						:href="`https://www.twitter.com/${playerDetail.twitter}`"
						target="_blank"
					>
						<i class="fab fa-twitter"></i>
						{{ playerDetail.twitter }}
					</a>
				</li>
				<li>
					<strong>생년월일: </strong>
					<span>{{ playerDetail.birthDate }}</span>
				</li>
				<li>
					<strong>출생: </strong>
					<span>{{ playerDetail.country }} {{ playerDetail.birthCity }}</span>
				</li>
				<li>
					<strong>소속팀: </strong>
					<span>{{ playerDetail.teamName }}</span>
				</li>
				<li>
					<strong>포지션: </strong>
					<span>{{
						`${playerDetail.position}(${playerDetail.throwsHand}${playerDetail.batsHand})`
					}}</span>
				</li>
				<li>
					<strong>등번호: </strong>
					<span>#{{ playerDetail.backNumber }}</span>
				</li>
				<li>
					<strong>신장/체중: </strong>
					<span> {{ playerDetail.height }}/{{ playerDetail.weight }} </span>
				</li>
				<li>
					<strong>고등학교: </strong>
					<span>{{ playerDetail.highSchool || '-' }}</span>
				</li>
				<li>
					<strong>대학교: </strong>
					<span>{{ playerDetail.college || '-' }}</span>
				</li>
				<li>
					<strong>데뷔일: </strong>
					<span>{{ playerDetail.debutDate }}</span>
				</li>
				<li>
					<strong>별명: </strong>
					<span>{{ playerDetail.nickname || '-' }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['playerDetail'],
	methods: {
		moveToTwitter(twitterURL) {
			window.open(`www.twitter.com/${twitterURL}`, '_blank');
		},
		imgError(e) {
			e.target.src =
				'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg';
		},
		// 	async createdLogic() {
		// 		this.$store.commit('SET_LOADING', true);
		// 		this.$store.commit('RESET_PLAYER_DETAIL');
		// 		await this.$store.dispatch(
		// 			'FETCH_PLAYER_DATA',
		// 			this.$route.params.detail,
		// 		);
		// 		this.$store.commit('SET_LOADING', false);
		// 	},
		// },
		// created() {
		// 	this.createdLogic();
	},
};
</script>

<style scoped>
.player_card {
	overflow: hidden;
	border: 1px solid #cfcfcf;
	padding: 10px 20px;
	margin: 0 auto;
	margin-top: 10px;
	width: 50%;
}
.player_card .player_img {
	float: left;
	width: 98px;
	margin-right: 40px;
}
.player_img img {
	width: 100%;
}
.player_card ul {
	display: block;
	width: 420px;
	float: left;
}
ul {
	margin: 0 auto;
	padding-left: 20px;
}
li {
	list-style: none;
	float: left;
	width: 200px;
	margin: 3px 3px;
	text-align: left;
}
a:visited {
	color: blue;
}
a:active {
	color: blue;
}
</style>
