<template>
	<div>
		<table class="table">
			<tr class="tableHeader">
				<th>선수</th>
				<th>팀</th>
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
			<tr v-for="item in hitterData" :key="item.player_id">
				<td>{{ item.name_display_first_last }}</td>
				<td>{{ item.team_name }}</td>
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
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	props: ['hitterData', 'thData'],
	computed: {
		selectedType() {
			return this.$route.query.statType;
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
	border-top-color: rgb(119, 119, 132);
	border-right-color: rgb(224, 224, 224);
	border-left-color: rgb(224, 224, 224);
	border-bottom-color: rgb(212, 212, 212);
	border-collapse: collapse;
	margin: 30px 0 100px 0;
}
.tableHeader {
	background-color: #f7f7f7;
	padding: 10px 0;
}
.selected {
	color: blue;
}
td {
	height: 50px;
	border-bottom: 1px solid gray;
}
.toggleHeader {
	cursor: pointer;
}
</style>
