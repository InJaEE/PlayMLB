<template>
	<div>
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
</template>

<script>
import LeagueMenu from '@/components/common/LeagueMenu.vue';
import InfoTeamList from './InfoTeamList.vue';

export default {
	components: {
		LeagueMenu,
		InfoTeamList,
	},
	data() {
		return {
			isLoading: false,
		};
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
	},
	watch: {
		isLoading(newV) {
			if (newV) {
				this.$store.commit('SET_LOADING', true);
			} else if (!newV) {
				this.$store.commit('SET_LOADING', false);
			}
		},
	},
	methods: {
		getLeagueClub(leagueParam) {
			let league = this.$route.params.detail === 'nl' ? 'nl' : 'al';
			league += leagueParam;
			const storeAllClub = this.$store.getters.fetchedAllClub;
			const filteredLeague = Object.entries(storeAllClub).filter(v => {
				return v[1].division_abbrev.toLowerCase() === league;
			});
			return filteredLeague;
		},
	},
	async created() {
		this.isLoading = true;
		await this.$store.dispatch('FETCH_ALL_CLUB', 2019);
		this.isLoading = false;
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
