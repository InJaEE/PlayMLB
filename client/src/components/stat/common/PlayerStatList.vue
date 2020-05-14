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
					<span :class="{ selected: selectedType === item[1] }">
						{{ item[0] }}
					</span>
					<span>
						<i
							class="fas fa-sort-down"
							:class="{ selected: selectedType === item[1] }"
						></i>
					</span>
				</th>
			</tr>
			<tr v-for="(item, index) in playerData" :key="item.player_id">
				<td>{{ index + 1 }}</td>
				<td class="inner">
					<div>
						<img
							class="emblem"
							:src="
								`https://www.mlbstatic.com/team-logos/team-cap-on-light/${item.team_id}.svg`
							"
							alt=""
						/>
						<div>
							<span class="player name">
								{{ item.name_display_first_last }}</span
							>
							<span class="player team">{{ item.team_name }}</span>
						</div>
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
		playerData: Array,
		thData: Array,
	},
	computed: {
		selectedType() {
			return this.$route.query.statType;
		},
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
	white-space: nowrap;
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
.emblem {
	padding-left: 20px;
	width: 25px;
	height: 25px;
	float: left;
}
</style>
