<template>
  <div >
    <div v-if="this.$route.name==='start'">
      <start-view></start-view>
    </div>
    <div v-else>
      <tool-bar></tool-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StartView from './views/StartView.vue';
import ToolBar from './components/Toolbar.vue';
export default {
  components: {
    StartView, ToolBar
  },
}
</script>

<style>
body {
  text-align: center;
}
</style>