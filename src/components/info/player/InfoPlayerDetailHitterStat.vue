<template>
	<div v-if="stat.length > 0">
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
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { hitterTableHeader } from '@/data/playerDetailTableHeader';
export default {
	props: { stat: Array },
	data() {
		return {
			thList: hitterTableHeader,
		};
	},
};
</script>

<style scoped>
.stat_wrapper {
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 50px;
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
