<template>
  <info-box classes="employment green-box">
    <section>
      <h2>Employers</h2>
      <ul>
        <li><a href="http://libboo.com/">Libboo</a>&nbsp;(06.13 - 02.14)</li>
        <li><a href="http://thoughtbot.com">thoughtbot</a>&nbsp;(06.14 - 04.18)</li>
        <li><a href="http://stridenyc.com">Stride </a>&nbsp;(05.18 - now)</li>
      </ul>
    </section>
    <section>
      <h2><a v-on:click="showingClients = !showingClients">Clients</a></h2>
      <ul>
        <li>Planned Parenthood</li>
        <li>Kickstarter</li>
        <li>Groupon</li>
        <li>Shutterstock</li>
        <li><em>And more!</em></li>
      </ul>
    </section>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'employers',
  components: {
    InfoBox,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';
</style>
