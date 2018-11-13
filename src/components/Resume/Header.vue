<template>
  <info-box v-bind:classes="infoBoxClasses">
    <header>
      <h1>Hi! I'm <strong>Avielle Wolfe</strong></h1>
      <p><a href="mailto:aviellewolfe@pm.me">aviellewolfe@pm.me</a></p>
    </header>
    <section>
      <p>
        I've spent <strong>{{ timeAsDeveloper }}</strong> working as a web developer.
      </p>
      <p>
        I've worked for <strong>3</strong> employers.<br/>
        <strong>2</strong> of those are consultancies.<br/>
        Between the two, I've worked with <strong>15</strong> clients.<br/>
        <router-link to="/clients">See the details!</router-link>
      </p>
      <p>
        I'm practiced in <strong>Agile development</strong>,
        <strong>TDD</strong>,
        and <strong>XP</strong>.<br/>
        I believe in applying them pragmatically.<br/>
        Above all, I believe in the Agile mantra:<br/>
        <em>People over process!</em>
      </p>
      <p>
        I believe in making applications by considering user input,<br/>
        By protecting users' <em>security</em> and <em>privacy</em>,<br/>
        And by keeping our technology choices simple for the sake of future developers.
      </p>
    </section>
  </info-box>
</template>

<script>
import moment from 'moment';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'resume-header',
  components: {
    InfoBox,
  },
  props: {
    classes: String,
  },
  data: function headerData() {
    return {
      infoBoxClasses: `${this.classes} purple-box`,
    };
  },
  computed: {
    timeAsDeveloper: function timeAsDeveloper() {
      const firstMonthAsDeveloper = new Date(2013, 6);
      const now = moment();

      return now.from(firstMonthAsDeveloper, true);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/info_boxes.scss';
</style>
