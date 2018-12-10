<template>
  <info-box classes="client pink-box">
    <router-link class="go-back" to="/resume">Back to resume</router-link>
    <hr />
    <component :is="page || 'client-index'" />
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
@import '@/assets/styles/variables.scss';

.go-back {
  margin-bottom: 20px;
}

.client {
  min-height: 100vh;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    min-height: initial;
  }
}
</style>
