<template>
  <div class="home-directory-container">
    <div class="home-directory">
      <p>Home Dir!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-directory',
};
</script>

<style lang="scss">
$fuschia: #FF00FF;

p {
  color: #d1d0cf;
}

.home-directory-container {
  padding: 100px;
}

.home-directory {
  background-color: rgba($fuschia, 0.2);
  border: $fuschia 1px solid;
  box-shadow: 0px 0px 8px 18px rgba($fuschia, 0.5);
  border-radius: 3px;
  height: 500px;
  padding: 50px;
}
</style>
