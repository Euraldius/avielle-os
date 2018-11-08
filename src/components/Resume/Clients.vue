<template>
  <info-box v-bind:classes="infoBoxClasses">
    <section>
      <h1>Clients</h1>
      <h2>thoughtbot</h2>
        <ul>
          <li>SkilledUp (09.14 - 11.14)</li>
          <li>Merck (11.14 - 01.15)</li>
          <li>Groupon (02.15 - 09.15)</li>
          <li>Anheuser Beusch (10.15 - 12.15)</li>
          <li>Shutterstock (12.15 - 06.16)</li>
          <li>Neon Labs (07.16)</li>
          <li>PanOpen (08.16 - 10.16)</li>
          <li>lifeIMAGE Mammosphere (10.16 - 11.16)</li>
          <li>Harry's (12.16 - 03.17)</li>
          <li>ConvertKit (03.17 - 07.17)</li>
          <li>Advocacy Institute (08.17)</li>
          <li>Planned Parenthood (09.17)</li>
          <li>Barkbox (09.17 - 12.17)</li>
          <li>Advocacy Institute x2! (01.18)</li>
          <li>Kickstarter (02.18 - 04.18)</li>
        </ul>
        <h2>Stride</h2>
        <ul>
          <li>Joor (05.18 - 10.18)</li>
        </ul>
    </section>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'resume-clients',
  components: {
    InfoBox,
  },
  props: {
    classes: String,
  },
  data: function headerData() {
    return {
      infoBoxClasses: `${this.classes} pink-box`,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';
</style>
