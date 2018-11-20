<template>
  <div class="finder">
    <star-field />
    <slot></slot>
  </div>
</template>

<script>
import StarField from '@/components/StarField.vue';

export default {
  name: 'finder',
  components: {
    StarField,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.finder {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    margin: 20px auto;
    width: 80%;
  }

  @media only screen and (min-width: $large-device-breakpoint) {
    margin: 20px auto;
    width: 50%;
  }
}
</style>
