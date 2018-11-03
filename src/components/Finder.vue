<template>
  <div class="finder-container">
    <div class="finder">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'finder',
};
</script>

<style lang="scss">
$fuschia: #FF00FF;

.finder-container {
  padding: 100px;
}

.finder {
  background-color: rgba($fuschia, 0.2);
  border: $fuschia 1px solid;
  box-shadow: 10px -10px 5px 5px rgba($fuschia, 0.2);
  border-radius: 3px;
  height: 500px;
  padding: 50px;
}
</style>
