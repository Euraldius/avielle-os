<template>
  <info-box classes="header purple-box">
    <router-link class="go-back" to="/resume">Back to resume</router-link>
    <hr />
    <component :is="page" />
    <p>Select a client from the menu to see details of that client.</p>
    <h2>Some particularly interesting clients may be:</h2>
    <ul>
      <li>Kickstarter</li>
    </ul>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';
import * as clientDetails from '@/components/Clients/ClientDetails';

export default {
  name: 'client',
  components: {
    InfoBox,
    ...clientDetails,
  },
  props: {
    page: String,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';

.go-back {
  margin-bottom: 20px;
}
</style>
