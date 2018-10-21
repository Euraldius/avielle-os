<template>
  <div class="home">
    <div class="startup-screen">
      <Moon />
      <h1 class="title"><em>Wolfe Howls at Moon <span class="os">OS</span></em></h1>
    </div>
  </div>
</template>

<script>
import Moon from '@/components/icons/Moon.vue';

export default {
  name: 'home',
  components: {
    Moon,
  },
};

function loadHalloween() {
  const trial = document.createElement('script');
  trial.type = 'text/javascript';
  trial.async = true;
  trial.src =
    'https://easy.myfonts.net/v2/js?sid=216109(font-family=ITC+Serif+Gothic+Std+Light)&sid=216111(font-family=ITC+Serif+Gothic+Std+Bold)&sid=216114(font-family=ITC+Serif+Gothic+Std+Roman)&key=ucXR7KX8zz';
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(trial);
}

loadHalloween();
</script>

<style>
@keyframes startup {
  0% { opacity: 0; }
  40% { opacity: 100; }
  60%  { opacity: 100; }
  100% { opacity: 0; }
}

.home {
  background-color: black;
  height: 100vh;
}

.startup-screen {
  padding-top: 100px;
}

.startup-screen {
  animation: startup 20s;
}

.title {
  color: orange;
  font-family: 'ITC Serif Gothic Std Bold';
  font-size: 60px;
}

.os {
  font-size: 82px;
}
</style>
