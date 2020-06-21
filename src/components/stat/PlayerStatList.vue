<template>
	<div>
		<table class="table">
			<tr class="tableHeader">
				<th>순위</th>
				<th class="player">선수</th>
				<th
					v-for="(item, index) in thData"
					:key="index"
					@click="sortData(item[1])"
					class="toggleHeader"
				>
					<div class="statType" :class="selectedStat(item[1])">
						{{ item[0] }}
						<i class="fas fa-sort-down" :class="selectedStat(item[1])"></i>
					</div>
				</th>
			</tr>
			<tr v-for="(item, index) in playerData" :key="item.player_id">
				<td>{{ index + 1 }}</td>
				<td class="playerBaseInfo">
					<img
						:src="
							`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item.team_id}.svg`
						"
						alt="emblem"
						class="emblem_img"
					/>
					<div class="teamAndName">
						<router-link :to="`/info/player/${item.player_id}`">
							<span class="player name">
								{{ item.name_display_first_last }}</span
							>
						</router-link>
						<span class="player team">{{ item.team_name }}</span>
					</div>
				</td>
				<template v-if="hitterORpitcher === 'hitter'">
					<td>{{ item.ab }}</td>
					<td>{{ item.avg }}</td>
					<td>{{ item.rbi }}</td>
					<td>{{ item.hr }}</td>
					<td>{{ item.sb }}</td>
					<td>{{ item.r }}</td>
					<td>{{ item.h }}</td>
					<td>{{ item.d }}</td>
					<td>{{ item.t }}</td>
					<td>{{ item.bb }}</td>
					<td>{{ item.so }}</td>
					<td>{{ item.obp }}</td>
					<td>{{ item.g }}</td>
				</template>
				<template v-else>
					<td>{{ item.w }}</td>
					<td>{{ item.l }}</td>
					<td>{{ item.sv }}</td>
					<td>{{ item.era }}</td>
					<td>{{ item.so }}</td>
					<td>{{ item.ip }}</td>
					<td>{{ item.h }}</td>
					<td>{{ item.hr }}</td>
					<td>{{ item.bb }}</td>
					<td>{{ item.g }}</td>
				</template>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		playerData: [Array, Object],
		thData: Array,
	},
	computed: {
		hitterORpitcher() {
			let param = this.$route.params.type;
			if (param === undefined) {
				param = 'hitter';
			}
			return param;
		},
	},
	methods: {
		sortData(statType) {
			let season = this.$route.query.season;
			if (season === undefined) {
				season = new Date().getFullYear() - 1;
			}
			this.$router.push({ query: { season, statType } });
			this.$emit('refresh');
		},
		selectedStat(v) {
			const route = this.$route;
			if (route.query.statType === v) {
				return 'selected';
			} else if (
				(route.params.type === 'hitter' || !route.params.type) &&
				!route.query.statType &&
				v === 'hr'
			) {
				return 'selected';
			} else if (
				route.params.type === 'pitcher' &&
				!route.query.statType &&
				v === 'era'
			) {
				return 'selected';
			}
			return '';
		},
	},
};
</script>

<style scoped>
.table {
	width: 100%;
	text-align: center;
	font-size: 0.8rem;
	border-collapse: collapse;
	margin: 30px 0 100px 0;
	border-left: 1px solid #f4f4f4;
	border-right: 1px solid #f4f4f4;
}
.tableHeader {
	background-color: #f7f7f7;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid gray;
}
.selected {
	color: blue;
}
i.selected {
	transform: rotate(180deg);
}
td {
	height: 50px;
	border-bottom: 1px solid #f4f4f4;
}
.toggleHeader {
	cursor: pointer;
}
.player {
	overflow: hidden;
	text-overflow: ellipsis;
	display: block;
}
.name {
	text-align: left;
	padding-left: 10px;
}
.team {
	color: #9e9e9e;
	font-size: 11px;
	padding-left: 10px;
	text-align: left;
}
.emblem_img {
	padding-left: 20px;
	max-width: 40px;
	max-height: 40px;
	float: left;
}
a:visited {
	color: blue;
}
a:active {
	color: blue;
}
.playerBaseInfo {
	display: flex;
	align-items: center;
	overflow: hidden;
}
.playerBaseInfo .teamAndName {
	display: flex;
	flex-direction: column;
}
</style>
