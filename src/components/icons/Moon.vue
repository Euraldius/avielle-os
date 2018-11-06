<!-- eslint-disable -->

<template>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 300 300" style="overflow:visible;enable-background:new 0 0 300 300;" xml:space="preserve">
  <path d="M180.9,257.8c-77.9,0-141.1-63.3-141.1-141.3c0-48.4,24.2-91,61.2-116.5C42.1,21.6,0,78.5,0,145.4  C0,230.8,68.8,300,153.6,300c68.6,0,126.7-45.3,146.4-107.7C275,231.7,231,257.8,180.9,257.8z"/>
  </svg>
</template>

<script>
export default {
  name: 'moon',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

svg {
  fill: white;
  height: 200px;
  transform: rotate(240deg);
  width: 200px;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    height: 300px;
    width: 300px;
  }
}
</style>
