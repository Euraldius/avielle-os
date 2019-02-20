<template>
  <info-box v-bind:classes="infoBoxClasses">
    <section>
      <h2>Employers</h2>
      <ul>
        <li><a href="http://libboo.com/">Libboo</a>&nbsp;(06.13 - 02.14)</li>
        <li><a href="http://thoughtbot.com">thoughtbot</a>&nbsp;(06.14 - 04.18)</li>
        <li><a href="http://stridenyc.com">Stride </a>&nbsp;(05.18 - 02.19)</li>
      </ul>
    </section>
    <section>
      <h2><router-link to="/clients">Clients</router-link></h2>
      <ul>
        <li><router-link to="/clients/kickstarter">Kickstarter</router-link></li>
        <li><router-link to="/clients/advocacy-institute">Advocacy Institute</router-link></li>
        <li><router-link to="/clients/panopen">panOpen</router-link></li>
        <li><router-link to="/clients/shutterstock">Shutterstock</router-link></li>
        <li><em><router-link to="/clients">And more!</router-link></em></li>
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
  props: {
    classes: String,
  },
  data: function headerData() {
    return {
      infoBoxClasses: `${this.classes} green-box`,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';
</style>
