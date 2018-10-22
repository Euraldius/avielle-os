<template>
  <div class="home">
    <StartupScreen />
  </div>
</template>

<script>
import StartupScreen from '@/components/StartupScreen.vue';

export default {
  name: 'home',
  components: {
    StartupScreen,
  },
};
</script>

<style>
.home {
  background-color: black;
  height: 100vh;
}
</style>
