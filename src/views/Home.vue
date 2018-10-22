<template>
  <div class="home">
    <StartupScreen v-if="startingUp" v-bind:startupTime="startupTime" />
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
    secondsSinceLoad: 0,
    startupTime: STARTUP_TIME,
  }),
  computed: {
    startingUp: function startingUp() {
      return this.secondsSinceLoad < STARTUP_TIME;
    },
  },
  mounted: function startTimer() {
    const interval = setInterval(() => {
      if (this.startingUp) {
        this.secondsSinceLoad += 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  },
};
</script>

<style>
.home {
  background-color: black;
  height: 100vh;
}
</style>
