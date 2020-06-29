<template>
	<footer>{{ time }}</footer>
</template>

<script>
export default {
	data() {
		return {
			time: new Date(),
		};
	},
	methods: {
		now() {
			return setInterval(() => {
				this.time = new Date();
			}, 1000);
		},
	},
	created() {
		this.now();
	},
};
</script>

<style scoped>
footer {
	box-sizing: border-box;
	position: fixed;
	background-color: #041e42;
	color: white;
	bottom: 0;
	width: 100%;
}
</style>
