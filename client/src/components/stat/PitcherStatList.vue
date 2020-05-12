<template>
	<div>
		<table>
			<th>선수</th>
			<th>승</th>
			<th>패</th>
			<th>세이브</th>
			<th>평균자책</th>
			<th>탈삼진</th>
			<th>홀드</th>
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
				<td></td>
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

<style></style>
