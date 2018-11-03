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

<style lang="scss">
$text-white: #d1d0cf;

.directory-link {
  color: $text-white;
}
</style>
