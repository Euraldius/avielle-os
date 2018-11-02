<template>
  <div class="home">
    <div class="home-directory-container">
      <div class="home-directory">
        <router-link to="/resume" class="directory-link">resume</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="scss">
$fuschia: #FF00FF;
$text-white: #d1d0cf;

.directory-link {
  color: $text-white;
}

.home-directory-container {
  padding: 100px;
}

.home-directory {
  background-color: rgba($fuschia, 0.2);
  border: $fuschia 1px solid;
  box-shadow: 10px -10px 5px 5px rgba($fuschia, 0.2);
  border-radius: 3px;
  height: 500px;
  padding: 50px;
}
</style>
