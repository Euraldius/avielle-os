<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Karla');
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow');
@import '@/assets/styles/variables.scss';

@font-face {
  font-family: Halloween;
  font-weight: bold;
  src: url(./assets/fonts/halloween.woff);
}

a {
  color: $fuschia;
  text-decoration: none;
}

a:visited {
  color: $stolen-purple;
}

a:hover {
  font-style: italic;
}

.link {
  background:none;
  border:none;
  color: $fuschia;
  font-size: 1em;
  cursor: pointer;
  padding:0;

  &:hover {
    font-style: italic;
  }
}

h1 {
  font-size: 2em;
}

h1, h2, h3 {
  color: black;
  font-stretch: condensed;
}

ul {
  margin-top: 0;
  padding-left: 10px;
}

li {
  line-height: 1.6em;
  list-style: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Karla', sans-serif;

  h1 {
    font-family: Halloween;
  }

  h2, h3, h4, h5, h6 {
    font-family: 'Archivo Narrow', sans-serif;
  }
}
</style>
