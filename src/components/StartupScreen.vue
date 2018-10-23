<template>
  <div class="startup-screen" v-bind:style="startupScreenStyles">
    <Moon />
    <h1 class="title">Wolfe Howls at Moon <span class="os">OS</span></h1>
    <p><em>Version: 6.66</em></p>
    <p><em>Ni dios, ni jefes, ni maridos</em></p>
  </div>
</template>

<script>
import Moon from '@/components/icons/Moon.vue';

export default {
  name: 'startup-screen',
  components: {
    Moon,
  },
  props: {
    startupTime: Number,
  },
  data: function startupScreenStyles() {
    return {
      startupScreenStyles: {
        animationDuration: `${this.startupTime}s`,
      },
    };
  },
};
</script>

<style scoped>
@keyframes startup {
  0% { opacity: 0; }
  40% { opacity: 100; }
  60%  { opacity: 100; }
  100% { opacity: 0; }
}

@font-face {
  font-family: Halloween;
  font-weight: bold;
  src: url(../assets/fonts/halloween.woff);
}

p {
  color: #d1d0cf;
}

.startup-screen {
  animation-name: startup;
  padding-top: 100px;
  text-align: center;
}

.title {
  color: orange;
  font-family: Halloween;
  font-size: 60px;
}

.os {
  font-size: 82px;
}
</style>
