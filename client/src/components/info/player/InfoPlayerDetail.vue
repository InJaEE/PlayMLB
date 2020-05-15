<template>
	<div>
		<div>
			<a
				:href="`https://www.twitter.com/${playerDetail.twitter}`"
				target="_blank"
			>
				{{ playerDetail.twitter }}
			</a>
		</div>
		{{ playerDetail }}
	</div>
</template>

<script>
export default {
	computed: {
		playerDetail() {
			return this.$store.getters.fetchedPlayerDetail;
		},
	},
	methods: {
		moveToTwitter(twitterURL) {
			window.open(`www.twitter.com/${twitterURL}`, '_blank');
		},
	},
	created() {
		console.log('created');
	},
};
</script>

<style></style>
