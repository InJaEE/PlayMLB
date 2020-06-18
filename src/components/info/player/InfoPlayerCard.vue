<template>
	<div>
		<a-list
			item-layout="horizontal"
			:data-source="playerList"
			style="max-width: 300px; margin: 0 auto;"
		>
			<a-list-item
				slot="renderItem"
				slot-scope="item, index"
				v-if="currentPage(index)"
			>
				<a-list-item-meta>
					<span slot="title" class="playerTitle">
						<router-link :to="`/info/player/${item.playerId}`">
							<div>
								<img
									:src="
										`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item.teamId}.svg`
									"
									alt="team_img"
									class="teamImg"
								/>
								{{ item.name }} {{ '#' + item.backNumber }}
							</div>
						</router-link>
					</span>
					<a-avatar
						slot="avatar"
						:src="
							`https://securea.mlb.com/mlb/images/players/head_shot/${item.playerId}.jpg`
						"
						shape="square"
						style="height:100px; width: 70px;"
					/>
				</a-list-item-meta>
			</a-list-item>
		</a-list>
		<a-pagination
			:current="currentPlayerPage"
			:total="playerList.length"
			:pageSize="playerPageSize"
			@change="changePage"
			:hideOnSinglePage="true"
		/>
	</div>
</template>

<script>
export default {
	props: {
		playerList: Array,
	},
	data() {
		return {
			currentPlayerPage: 1,
			playerPageSize: 5,
		};
	},
	methods: {
		currentPage(index) {
			return (
				Math.floor(index / this.playerPageSize) + 1 === this.currentPlayerPage
			);
		},
		changePage(i) {
			this.currentPlayerPage = i;
		},
	},
};
</script>

<style scoped>
.teamImg {
	width: 30px;
}
.playerTitle {
	font-size: 20px;
	display: inline-block;
	margin-top: 28px;
}
</style>
