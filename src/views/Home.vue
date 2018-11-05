<template>
  <finder>
    <router-link to="/resume" class="directory-link">resume</router-link>
  </finder>
</template>

<script>
import Finder from '@/components/Finder.vue';

export default {
  name: 'home',
  components: {
    Finder,
  },
};
</script>

<style scoped lang="scss">
</style>
