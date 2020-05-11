<template>
  <div class="leagueTable">
      <div>
        <h3>동부지구</h3>
        <team-stat-list :teamList="getLeagueClub('e')"></team-stat-list>
      </div>
      <div>
        <h3>중부지구</h3>
        <team-stat-list :teamList="getLeagueClub('c')"></team-stat-list>
      </div>
      <div>
        <h3>서부지구</h3>
        <team-stat-list :teamList="getLeagueClub('w')"></team-stat-list>
      </div>
  </div>
</template>

<script>
import TeamStatList from './TeamStatList.vue';
export default {
  components: {
    TeamStatList,
  },
  methods: {
        getLeagueClub(leagueParam){
          let league = this.$route.params.league==='nl'? 'nl':'al';
          league += leagueParam;
          const storeAllClub = this.$store.getters.fetchedAllClub;
          const filteredLeague = Object.entries(storeAllClub).filter(v => {
            return v[1].division_abbrev.toLowerCase() === league;
          });
          return filteredLeague;
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