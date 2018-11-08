<template>
  <info-box v-bind:classes="infoBoxClasses">
    <h2>Points of interest</h2>
    <section>
      <h3>Bathrooms for all!</h3>
      <p><a href="https://robots.thoughtbot.com/we-ungendered-our-restrooms-and-you-can-too">I led the ungendering of the thoughtbot NYC office bathrooms.</a></p>
    </section>
    <section>
      <h3>No justice, no peace.</h3>
      <p>
      I authored thoughtbot's <a href="https://robots.thoughtbot.com/reaction-to-executive-order-13769">response to Executive Order 13769</a>.
      It was published anonymously to protect me from the less tolerant parts of
      the Internet. (Verification can be provided upon request.)
      </p>
    </section>
    <section>
      <h3>factory_bot</h3>
      <p>
      I renamed factory_girl to factory_bot.<br/>
      <br/>
      <a href="https://github.com/thoughtbot/factory_bot/pull/1051">https://github.com/thoughtbot/factory_bot/pull/1051</a><br/>
      <a href="https://robots.thoughtbot.com/factory_bot">https://robots.thoughtbot.com/factory_bot</a><br/>
      <br/>
      On this one, enormous thanks to Josh Clayton and others in thoughtbot
      who assisted me and handled the response.
      </p>
    </section>
  </info-box>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'points-of-interest',
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
