<template>
  <div class="home">
    <StartupScreen v-bind:startupTime="startupTime" />
  </div>
</template>

<script>
import StartupScreen from '@/components/StartupScreen.vue';

const STARTUP_TIME = 5; // seconds

export default {
  name: 'home',
  components: {
    StartupScreen,
  },
  data: () => ({
    startupTime: STARTUP_TIME,
  }),
};
</script>

<style>
.home {
  background-color: black;
  height: 100vh;
}
</style>
