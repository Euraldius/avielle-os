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
    padding: 20px;
  }

  @media only screen and (min-width: $large-device-breakpoint) {
    margin: 0 auto;
    width: 50%;
  }
}
</style>
