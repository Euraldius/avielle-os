<template>
  <div class="startup-screen" v-bind:style="startupScreenStyles">
    <Moon />
    <h1 id="halloween-title">Wolfe Howls at Moon <span class="os">OS</span></h1>
    <h2><em>Version: 6.66</em></h2>
    <h2><em>Ni gods, no masters</em></h2>
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

        router.push('resume');
      }
    }, 1000);
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

$text-white: #d1d0cf;

@keyframes startup {
  0% { opacity: 0; }
  40% { opacity: 100; }
  60%  { opacity: 100; }
  100% { opacity: 0; }
}

.startup-screen {
  animation-name: startup;
  color: $text-white;
  padding-top: 100px;
  text-align: center;

  h2 {
    font-size: 1em;

    @media only screen and (min-width: $mid-size-device-breakpoint) {
      font-size: 1.5em;
    }
  }

  h2 {
    color: #d1d0cf;
  }
}

#halloween-title {
  color: orange;
  font-size: 1.2em;
  margin-top: 30px;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    font-size: 60px;
  }
}

.os {
  font-size: 1.3em;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    font-size: 82px;
  }
}
</style>
