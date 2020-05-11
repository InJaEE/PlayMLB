<template>
  <div class="contents">
    <stat-header></stat-header>
    <div v-if="currentPage">
      <player-stat-main></player-stat-main>
    </div>
    <div v-else>
      <team-stat-main></team-stat-main>
    </div>
  </div>
</template>

<script>
import StatHeader from '../components/stat/StatHeader.vue';
import TeamStatMain from '../components/stat/TeamStatMain.vue';
import PlayerStatMain from '../components/stat/PlayerStatMain.vue';
export default {
  components: {
    StatHeader, TeamStatMain, PlayerStatMain,
  },
  computed: {
    currentPage(){
      const teamORplayer = this.$route.params.type === 'player'? true: false
      return teamORplayer;
    },
  },
}
</script>

<style>
</style>