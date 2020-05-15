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
			console.log(`www.twitter.com/${twitterURL}`);
			//const path = this.$router.resolve(`/www.twitter.com/${twitterURL}`);
			window.open(`www.twitter.com/${twitterURL}`, '_blank');
		},
	},
};
</script>

<style></style>
