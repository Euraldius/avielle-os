<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$text-white: #d1d0cf;

#app {
  font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed",
  "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed",
  "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold",
  "HelveticaNeue", "Helvetica Neue", "TeXGyreHerosCnBold", "Helvetica",
  "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-white;
}
</style>
