<template>
  <finder>
    <div class="resume">
      <resume-header v-if="!showingClients" />
      <kickstarter v-if="showingClients" />
      <resume-stats v-if="!showingClients" />
      <resume-clients v-if="showingClients" />
      <employer v-if="!showingClients" />
      <info-box v-if="!showingClients" classes="points-of-interest blue-box">
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
    </div>
  </finder>
</template>

<script>
import moment from 'moment';
import Finder from '@/components/Finder.vue';
import InfoBox from '@/components/InfoBox.vue';
import ResumeClients from '@/components/Resume/Clients.vue';
import ResumeHeader from '@/components/Resume/Header.vue';
import ResumeStats from '@/components/Resume/Stats.vue';
import Kickstarter from '@/components/Resume/Kickstarter.vue';
import Employers from '@/components/Resume/Employers.vue';

export default {
  name: 'resume',
  components: {
    Finder,
    InfoBox,
    ResumeHeader,
    Kickstarter,
    ResumeStats,
    ResumeClients,
    Employers,
  },
  data: function resumeData() {
    return {
      showingClients: false,
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

.resume {
  display: grid;
  color: $text-grey;
  grid-column-gap: 40px;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-row-gap: 20px;
  }
}

.header {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 2 / span 3;
    grid-row: 1;
  }
}

.stats {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 1;
    grid-row: 1;
  }
}

.employment {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 1;
    grid-row: 2;
  }
}

.points-of-interest {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 2 / span 3;
    grid-row: 2;
  }
}
</style>
