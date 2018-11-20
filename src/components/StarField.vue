<template>
  <div class="star-field">
    <Star
      v-for="n in 200"
      v-bind:star-num="n"
      v-bind:key="n">
    </Star>
  </div>
</template>

<script>
import Star from '@/components/Star.vue';

export default {
  name: 'StarField',
  components: {
    Star,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.star-field {
  display: none;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    display: block;
  }
}
</style>
