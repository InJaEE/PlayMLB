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
			<span class="player_info">
				<div>
					<span>
						<strong>이름: </strong>
						<span>{{ playerDetail.name }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>생년월일: </strong>
						<span>{{ playerDetail.birthDate }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>소속팀: </strong>
						<span>{{ playerDetail.teamName }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>등번호: </strong>
						<span>#{{ playerDetail.backNumber }}</span>
					</span>
				</div>

				<div>
					<span>
						<strong>고등학교: </strong>
						<span>{{ playerDetail.highSchool || '-' }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>데뷔일: </strong>
						<span>{{ playerDetail.debutDate }}</span>
					</span>
				</div>
			</span>
			<div>
				<div>
					<span>
						<a
							:href="`https://www.twitter.com/${playerDetail.twitter}`"
							target="_blank"
						>
							<i class="fab fa-twitter"></i>
							{{ playerDetail.twitter }}
						</a>
					</span>
				</div>
				<div>
					<span>
						<strong>출생: </strong>
						<span>{{ playerDetail.country }} {{ playerDetail.birthCity }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>포지션: </strong>
						<span>{{
							`${playerDetail.position}(${playerDetail.throwsHand}${playerDetail.batsHand})`
						}}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>신장/체중: </strong>
						<span> {{ playerDetail.height }}/{{ playerDetail.weight }} </span>
					</span>
				</div>
				<div>
					<span>
						<strong>대학교: </strong>
						<span>{{ playerDetail.college || '-' }}</span>
					</span>
				</div>
				<div>
					<span>
						<strong>별명: </strong>
						<span>{{ playerDetail.nickname || '-' }}</span>
					</span>
				</div>
			</div>
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
	width: 60%;
	display: flex;
	justify-content: space-between;
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
a:visited {
	color: blue;
}
a:active {
	color: blue;
}
.player_info > div > span {
	margin-right: 5px;
}
</style>
