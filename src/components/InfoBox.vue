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
  render: function render(createElement) {
    const content = this.$slots.default;
    const heightPreserverContent = this.$slots.default;

    return createElement(
      'section',
      {
        class: this.infoBoxClasses,
      },
      [
        createElement('div', { class: 'content-animation-container' }, content),
        createElement('div', { class: 'height-preserver' }, heightPreserverContent),
      ],
    );
  },
};
</script>

<style lang="scss">
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

  p {
    margin-left: 10px;
    margin-right: 20px;
  }
}

.height-preserver {
  display: none;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    display: initial;
    visibility: hidden;
  }
}
</style>
