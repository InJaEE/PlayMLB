<template>
	<div>
		<a-skeleton
			:loading="false"
			style="align-items: center"
			class="player_info"
		>
			<a-list-item-meta>
				<div slot="description">
					<a-descriptions bordered :column="2">
						<a-descriptions-item label="이름">
							{{ playerDetail.name }}
						</a-descriptions-item>
						<a-descriptions-item label="트위터">
							<a
								:href="`https://www.twitter.com/${playerDetail.twitter}`"
								target="_blank"
							>
								<i class="fab fa-twitter"></i>
								{{ playerDetail.twitter }}
							</a>
						</a-descriptions-item>
						<a-descriptions-item label="생년월일">
							{{ playerDetail.birthDate }}
						</a-descriptions-item>
						<a-descriptions-item label="출생">
							{{ playerDetail.country }} {{ playerDetail.birthCity }}
						</a-descriptions-item>
						<a-descriptions-item label="소속팀">
							{{ playerDetail.teamName }}
						</a-descriptions-item>
						<a-descriptions-item label="포지션">
							{{
								`${playerDetail.position}(${playerDetail.throwsHand}${playerDetail.batsHand})`
							}}
						</a-descriptions-item>
						<a-descriptions-item label="등번호">
							{{ playerDetail.backNumber }}
						</a-descriptions-item>
						<a-descriptions-item label="신장/체중">
							{{ playerDetail.height }}/{{ playerDetail.weight }}
						</a-descriptions-item>
						<a-descriptions-item label="고등학교">
							{{ playerDetail.highSchool || '-' }}
						</a-descriptions-item>
						<a-descriptions-item label="대학교">
							{{ playerDetail.college || '-' }}
						</a-descriptions-item>
						<a-descriptions-item label="데뷔일">
							{{ playerDetail.debutDate }}
						</a-descriptions-item>
						<a-descriptions-item label="별명">
							{{ playerDetail.nickname || '-' }}
						</a-descriptions-item>
					</a-descriptions>
				</div>
				<a-avatar
					slot="avatar"
					shape="square"
					:size="150"
					style="height:auto; width:auto; max-height: 180px; max-width: 120px"
					ref="playerAvatar"
					:src="
						`https://securea.mlb.com/mlb/images/players/head_shot/${playerDetail.playerId}.jpg`
					"
					:loadError="imgError"
				/>
			</a-list-item-meta>
		</a-skeleton>
	</div>
</template>

<script>
export default {
	props: ['playerDetail'],
	methods: {
		imgError() {
			this.$refs.playerAvatar.src =
				'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg';
		},
	},
};
</script>

<style scoped>
.player_info {
	max-width: 800px;
	max-height: 500px;
	margin: 0 auto;
}
a:visited {
	color: blue;
}
a:active {
	color: blue;
}
</style>
