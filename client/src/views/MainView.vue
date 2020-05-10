<template>
  <div>
    <div class="mainContents">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from '@/components/AppMain.vue';
export default {
    components: {
        AppMain
    }
}
</script>

<style scoped>
.mainContents {
  margin-top: 50px;
}
</style>