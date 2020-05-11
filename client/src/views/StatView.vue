<template>
  <div class="contents">
    <stat-header></stat-header>
    <team-stat-main></team-stat-main>
    <player-stat-main></player-stat-main>
    <router-view></router-view>
  </div>
</template>

<script>
import StatHeader from '../components/stat/StatHeader.vue';
import TeamStatMain from '../components/stat/TeamStatMain.vue';
import PlayerStatMain from '../components/stat/PlayerStatMain.vue';
export default {
  components: {
    StatHeader, TeamStatMain, PlayerStatMain,
  }
}
</script>

<style>

</style>