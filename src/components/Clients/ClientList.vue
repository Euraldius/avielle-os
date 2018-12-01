<template>
  <info-box v-bind:classes="infoBoxClasses">
    <section>
      <h1>Clients</h1>
      <h2>thoughtbot</h2>
        <ul>
          <li><router-link to="/clients/skilled-up">SkilledUp</router-link> (09.14 - 11.14)</li>
          <li><router-link to="/clients/merck">Merck</router-link> (11.14 - 01.15)</li>
          <li><router-link to="/clients/groupon">Groupon</router-link> (02.15 - 09.15)</li>
          <li><router-link to="/clients/anheuser">Anheuser Beusch</router-link> (10.15 - 12.15)</li>
          <li>
            <router-link to="/clients/shutterstock">Shutterstock</router-link> (12.15 - 06.16)
          </li>
          <li><router-link to="/clients/panopen">panOpen</router-link> (07.16 - 10.16)</li>
          <li>
            <router-link to="/clients/lifeimage">lifeIMAGE Mammosphere</router-link> (10.16 - 11.16)
          </li>
          <li><router-link to="/clients/harrys">Harry's</router-link> (12.16 - 03.17)</li>
          <li><router-link to="/clients/convertkit">ConvertKit</router-link> (03.17 - 07.17)</li>
          <li>
            <router-link to="/clients/advocacy-institute">Advocacy Institute</router-link> (08.17)
          </li>
          <li><router-link to="/clients/qchatspace">Planned Parenthood</router-link> (09.17)</li>
          <li><router-link to="/clients/barkbox">Barkbox</router-link> (09.17 - 12.17)</li>
          <li>
            <router-link to="/clients/advocacy-institute-2">Advocacy Institute x2!</router-link>
            (01.18)
          </li>
          <li><router-link to="/clients/kickstarter">Kickstarter</router-link> (02.18 - 04.18)</li>
        </ul>
        <h2>Stride</h2>
        <ul>
          <li><router-link to="/clients/joor">JOOR</router-link> (05.18 - 10.18)</li>
        </ul>
    </section>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'client-list',
  components: {
    InfoBox,
  },
  props: {
    classes: String,
  },
  data: function headerData() {
    return {
      infoBoxClasses: `${this.classes} blue-box`,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';
</style>
