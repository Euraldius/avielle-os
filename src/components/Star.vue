<template>
  <div>
    <div class="star" v-bind:style="styles">
    </div>
  </div>
</template>

<script>
const STAR_COLORS = [
  '#9bb0ff',
  '#aabfff',
  '#cad7ff',
  '#f8f7ff',
  '#fff4ea',
  '#ffd2a1',
  '#ffcc6f',
];

const starData = () => {
  const { body } = document;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
  const width = window.innerWidth;
  const left = Math.floor((Math.random() * width) - 5);
  const top = Math.floor((Math.random() * height) + 1);
  const styles = {
    backgroundColor: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    left: `${left}px`,
    top: `${top}px`,
  };

  const delay = Math.floor((Math.random() * 10) + 1);
  const duration = Math.floor((Math.random() * 10) + 1);

  Object.assign(styles, {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  });

  return {
    styles,
  };
};

export default {
  name: 'Star',
  props: {
    starNum: Number,
  },
  data: starData,
};
</script>

<style scoped>
@keyframes twinkle {
  0% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.1;
  }
}

.star {
  animation: twinkle linear alternate infinite;
  background-color: white;
  height: 5px;
  opacity: 0.8;
  position: absolute;
  width: 5px;
  z-index: -1;
}
</style>
