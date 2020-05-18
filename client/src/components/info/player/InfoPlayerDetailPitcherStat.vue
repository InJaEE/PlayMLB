<template>
	<div>
		<div class="stat_wrapper">
			<table class="table">
				<thead class="tableHeader">
					<tr>
						<th v-for="item in thList" :key="item">
							<span>{{ item }}</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in stat" :key="index">
						<td>{{ item.season }}</td>
						<td>{{ item.team_short }}</td>
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
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: ['stat'],
	data() {
		return {
			thList: [
				'시즌',
				'팀',
				'승',
				'패',
				'세이브',
				'평균자책',
				'탈삼진',
				'이닝',
				'피안타',
				'피홈런',
				'볼넷',
				'경기수',
			],
		};
	},
};
</script>

<style scoped>
.stat_wrapper {
	width: 70%;
	margin: 0 auto;
	margin-top: 20px;
}
.table {
	border-collapse: collapse;
	width: 100%;
}
td {
	height: 50px;
	border-bottom: 1px solid #f4f4f4;
}
.tableHeader {
	background-color: #f7f7f7;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid gray;
}
</style>
