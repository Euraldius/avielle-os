<template>
  <section :class="infoBoxClasses">
    <div class="content-animation-container">
      <slot />
    </div>
    <div class="height-preserver">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'info-box',
  props: {
    classes: String,
  },
  computed: {
    infoBoxClasses: function infoBoxClasses() {
      return `info-box ${this.classes}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

@keyframes scrollIn {
  0% {
    max-height: 0;
  }

  100% {
    max-height: 1000px;
  }
}

.content-animation-container {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    animation-name: scrollIn;
    animation-duration: 5s;
    overflow: hidden;
    position: absolute;
  }
}

.info-box {
  padding: 10px 12px;
  position: relative;
}

.height-preserver {
  display: none;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    display: initial;
    visibility: hidden;
  }
}
</style>
