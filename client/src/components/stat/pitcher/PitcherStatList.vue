<template>
	<div>
		<table class="table">
			<th>선수</th>
			<th>승</th>
			<th>패</th>
			<th>세이브</th>
			<th>평균자책</th>
			<th>탈삼진</th>
			<th>이닝</th>
			<th>피안타</th>
			<th>피홈런</th>
			<th>볼넷</th>
			<th>경기수</th>
			<tr v-for="item in pitcherData" :key="item.player_id">
				<td>{{ item.name_display_first_last }}</td>
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
		</table>
	</div>
</template>

<script>
export default {
	props: ['pitcherData'],
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
</style>
