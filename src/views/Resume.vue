<template>
  <finder>
    <div class="resume">
      <resume-header classes="header" />
      <resume-stats classes="stats" />
      <employers classes="employment" />
      <points-of-interest classes="points-of-interest" />
    </div>
  </finder>
</template>

<script>
import Finder from '@/components/Finder.vue';
import InfoBox from '@/components/InfoBox.vue';
import ResumeHeader from '@/components/Resume/Header.vue';
import ResumeStats from '@/components/Resume/Stats.vue';
import Employers from '@/components/Resume/Employers.vue';
import PointsOfInterest from '@/components/Resume/PointsOfInterest.vue';

export default {
  name: 'resume',
  components: {
    Finder,
    InfoBox,
    ResumeHeader,
    ResumeStats,
    Employers,
    PointsOfInterest,
  },
};
</script>

<style lang="scss">
.resume {
  h2 {
    margin-bottom: 6px;
  }

  h1, h2 {
    margin-top: 20px;
  }

  h3 {
    margin-top: 25px;
    margin-bottom: 5px;
  }
}
</style>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

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
