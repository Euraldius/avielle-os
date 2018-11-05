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
.finder {
  padding: 20px;
  overflow: scroll;
}
</style>
