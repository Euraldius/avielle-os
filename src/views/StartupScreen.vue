<template>
  <div class="startup-screen" v-bind:style="startupScreenStyles">
    <Moon />
    <h1 class="title">Wolfe Howls at Moon <span class="os">OS</span></h1>
    <p><em>Version: 6.66</em></p>
    <p><em>Ni dios, ni jefes, ni maridos</em></p>
  </div>
</template>

<script>
import router from '@/router';
import Moon from '@/components/icons/Moon.vue';

const STARTUP_TIME = 5; // seconds

export default {
  name: 'startup-screen',
  components: {
    Moon,
  },
  data: function startupScreenStyles() {
    return {
      secondsSinceLoad: 0,
    };
  },
  computed: {
    startingUp: function startingUp() {
      return this.secondsSinceLoad < STARTUP_TIME;
    },
    startupScreenStyles: function startupScreenStyles() {
      const display = this.startingUp ? 'inherit' : 'none';

      return {
        animationDuration: `${STARTUP_TIME}s`,
        display,
      };
    },
  },
  mounted: function startTimer() {
    const interval = setInterval(() => {
      if (this.startingUp) {
        this.secondsSinceLoad += 1;
      } else {
        clearInterval(interval);

        router.push('home');
      }
    }, 1000);
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
