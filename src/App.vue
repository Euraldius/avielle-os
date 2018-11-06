<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Karla');
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow');

$text-white: #d1d0cf;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-white;
  font-family: 'Karla', sans-serif;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo Narrow', sans-serif;
  }
}
</style>
