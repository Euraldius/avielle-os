<template>
  <info-box classes="stats pink-box">
    <section>
      <h2>Languages</h2>
      <ul>
        <li>Ruby</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul>
    </section>
    <section>
      <h2>Web server frameworks</h2>
      <ul>
        <li>Ruby on Rails</li>
        <li>Node</li>
        <li>Django</li>
      </ul>
    </section>
    <section>
      <h2>Web client frameworks</h2>
      <ul>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </section>
      <h2>Practices</h2>
      <ul>
        <li>Agile</li>
        <li>TDD</li>
        <li>XP</li>
      </ul>
    <section>
    </section>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'resume-stats',
  components: {
    InfoBox,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';
</style>
