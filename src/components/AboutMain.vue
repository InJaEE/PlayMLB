<template>
	<section class="about_wrapper">
		<table>
			<thead>
				<tr>
					<th>
						Baekend
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						<img src="@/assets/stack/express.png" alt="express js" />
					</th>
					<th>
						<img src="@/assets/stack/mongoDB.png" alt="mongoDB" />
					</th>
					<th>
						<img src="@/assets/stack/mongoose.png" alt="mongoose" />
					</th>
				</tr>
			</tbody>
		</table>
		<table>
			<thead>
				<tr>
					<th>
						Frontend
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Vue</th>
					<th>Vuex</th>
					<th>Vue router</th>
					<th>Antd</th>
					<th>MLB API</th>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.about_wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -100px;
	margin-left: -100px;
	width: 200px;
	height: 200px;
}
table {
	border: 1px solid black;
}
</style>
