<template>
	<div>
		<select name="stat">
			<option v-for="(item, index) in statArray" :key="index" :value="item">
				{{ item }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['statArray'],
};
</script>

<style></style>
