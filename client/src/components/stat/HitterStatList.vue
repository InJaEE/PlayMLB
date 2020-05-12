<template>
	<div>
		<table>
			<th>선수</th>
			<th>타수</th>
			<th>타율</th>
			<th>타점</th>
			<th>홈런</th>
			<th>도루</th>
			<th>득점</th>
			<th>안타</th>
			<th>2루타</th>
			<th>3루타</th>
			<th>볼넷</th>
			<th>삼진</th>
			<th>출루율</th>
			<th>경기수</th>
			<tr v-for="item in hitterData" :key="item.player_id">
				<td>{{ item.name_display_first_last }}</td>
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
	props: ['hitterData'],
	// computed: {
	// 	filterLeague() {
	// 		console.log('#', this.hitterData);

	// 		let filteredHitter = this.hitterData.filter(v => {
	// 			return v.league === 'nl';
	// 		});
	// 		return filteredHitter;
	// 	},
	// },
};
</script>

<style></style>
