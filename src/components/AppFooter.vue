<template>
	<footer>{{ time }}</footer>
</template>

<script>
export default {
	data() {
		return {
			time: '',
		};
	},
	methods: {
		now() {
			return setInterval(() => {
				this.time = new Date();
				const year = new Date().getFullYear();
				let month = new Date().getMonth() + 1;
				if (month < 10) month = '0' + month;
				let day = new Date().getDate();
				if (day < 10) day = '0' + day;
				const hour = new Date().getHours();
				let minute = new Date().getMinutes();
				if (minute < 10) minute = '0' + minute;
				let second = new Date().getSeconds();
				if (second < 10) second = '0' + second;
				this.time = `${year}.${month}.${day} ${hour}:${minute}:${second}`;
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
