<template>
	<div>
		<div v-if="computeLoading">
			<loading-spinner></loading-spinner>
		</div>
		<div v-else>
			<league-menu></league-menu>
			<div class="league">
				<h3>동부지구</h3>
				<info-team-list :teamList="eastClubList"></info-team-list>
			</div>
			<div class="league">
				<h3>중부지구</h3>
				<info-team-list :teamList="centralClubList"></info-team-list>
			</div>
			<div class="league">
				<h3>서부지구</h3>
				<info-team-list :teamList="westClubList"></info-team-list>
			</div>
		</div>
	</div>
</template>

<script>
import LeagueMenu from '@/components/common/LeagueMenu.vue';
import InfoTeamList from './InfoTeamList.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
	components: {
		LeagueMenu,
		InfoTeamList,
		LoadingSpinner,
	},
	computed: {
		eastClubList() {
			return this.getLeagueClub('e');
		},
		centralClubList() {
			return this.getLeagueClub('c');
		},
		westClubList() {
			return this.getLeagueClub('w');
		},
		computeLoading() {
			if (
				this.eastClubList.length !== 0 &&
				this.centralClubList.length !== 0 &&
				this.westClubList.length !== 0
			) {
				return false;
			}
			return true;
		},
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
		this.isLoading = true;
		this.$store.dispatch('FETCH_ALL_CLUB', 2019);
	},
};
</script>

<style scoped>
.league {
	margin: 30px 0;
	border-bottom: 1px solid black;
}
.league h3 {
	margin-bottom: 30px;
}
</style>
