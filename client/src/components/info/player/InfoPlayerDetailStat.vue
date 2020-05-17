<template>
	<div>
		<div>Career Stat</div>
		<table>
			<thead>
				<tr>
					<th v-for="item in thList" :key="item">
						<span>{{ item }}</span>
					</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			thList: [
				'시즌',
				'팀',
				'타수',
				'타율',
				'타점',
				'홈런',
				'도루',
				'득점',
				'안타',
				'2루타',
				'3루타',
				'볼넷',
				'삼진',
				'출루율',
				'경기수',
			],
		};
	},
};
</script>

<style></style>
