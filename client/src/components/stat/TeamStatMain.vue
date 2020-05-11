<template>
  <div class="leagueTable">
      <div>
        <h3>동부지구</h3>
        <team-stat-list :teamList="get_league_club('e')"></team-stat-list>
      </div>
      <div>
        <h3>중부지구</h3>
        <team-stat-list :teamList="get_league_club('c')"></team-stat-list>
      </div>
      <div>
        <h3>서부지구</h3>
        <team-stat-list :teamList="get_league_club('w')"></team-stat-list>
      </div>
  </div>
</template>

<script>
import TeamStatList from './TeamStatList.vue';
export default {
  components: {
    TeamStatList,
  },
  data(){
    return{
      isAL: true,
    }
  },
  computed: {
  },
  methods: {
    getLeagueClub(){
      let league = this.$route.params.league;
      if(league !== 'al'){
        this.isAL = false;
      } else{
        this.isAL = true;
      }
      const allClub = this.$store.getters.fetchedAllClub;
      const club = Object.entries(allClub).filter(v => {
        return v[1].league.toLowerCase() === league;
      });
      return club;
    },
    get_league_club(league){
      const leagueName = this.$route.params.league + league;
      const data = this.getLeagueClub().filter(v => {
        return v[1].division_abbrev.toLowerCase() === leagueName;
      });
      return data;
    },
  },
  created(){
    this.$store.dispatch('FETCH_ALL_CLUB', 2019);
  },
}
</script>

<style scoped>
.leagueTable div {
  border: 1px solid gray;
  margin: 10px 0 20px 0;
}
</style>