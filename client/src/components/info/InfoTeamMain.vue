<template>
	<div>
		<league-menu></league-menu>
		<div class="league">
			<h3>동부지구</h3>
			<info-team-list :teamList="getLeagueClub('e')"></info-team-list>
		</div>
		<div class="league">
			<h3>중부지구</h3>
			<info-team-list :teamList="getLeagueClub('c')"></info-team-list>
		</div>
		<div class="league">
			<h3>서부지구</h3>
			<info-team-list :teamList="getLeagueClub('w')"></info-team-list>
		</div>
	</div>
</template>

<script>
import LeagueMenu from '../common/LeagueMenu.vue';
import InfoTeamList from './InfoTeamList.vue';

export default {
	components: {
		LeagueMenu,
		InfoTeamList,
	},
	methods: {
		getLeagueClub(leagueParam) {
			let league = this.$route.params.league === 'nl' ? 'nl' : 'al';
			league += leagueParam;
			const storeAllClub = this.$store.getters.fetchedAllClub;
			const filteredLeague = Object.entries(storeAllClub).filter(v => {
				return v[1].division_abbrev.toLowerCase() === league;
			});
			return filteredLeague;
		},
	},
	created() {
		this.$store.dispatch('FETCH_ALL_CLUB', 2019);
	},
};
</script>

<style></style>
