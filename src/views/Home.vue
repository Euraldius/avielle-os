<template>
  <div class="home">
    <HomeDirectory />
  </div>
</template>

<script>
import HomeDirectory from '@/components/HomeDirectory.vue';

export default {
  name: 'home',
  components: {
    HomeDirectory,
  },
};
</script>

<style>
.home {
  background-color: black;
  height: 100vh;
}
</style>
