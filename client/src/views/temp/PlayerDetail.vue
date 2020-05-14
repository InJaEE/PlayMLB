<template>
	<div>
		<img
			:src="
				`https://securea.mlb.com/mlb/images/players/head_shot/${playerCode}.jpg`
			"
			alt=""
		/>
		<p>{{ playerData.name_display_first_last_html }}</p>
		<p>{{ playerData.team_name }}</p>
		<p>{{ playerData.age }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		playerCode() {
			return this.$route.params.code;
		},
		playerData() {
			console.log('#', this.$store.getters.fetchedPlayer);
			return this.$store.getters.fetchedPlayer;
		},
	},
	created() {
		this.$store.dispatch('FETCH_ONE_PLAYER', this.playerCode);
	},
};
</script>

<style></style>
