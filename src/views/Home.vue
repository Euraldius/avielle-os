<template>
  <finder>
    <resume />
  </finder>
</template>

<script>
import Finder from '@/components/Finder.vue';
import Resume from '@/views/Resume.vue';

export default {
  name: 'home',
  components: {
    Finder,
    Resume,
  },
};
</script>

<style scoped lang="scss">
</style>
