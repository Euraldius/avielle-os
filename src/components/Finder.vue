<template>
  <div class="finder">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'finder',
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
