<template>
  <div class="home">
    <div class="startup-screen">
      <Moon />
      <h1>Wolfe Howls at Moon OS</h1>
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
</style>
