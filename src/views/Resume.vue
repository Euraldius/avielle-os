<template>
  <finder>
    <div class="resume">
      <info-box classes="header">
        <resume-header />
      </info-box>
      <info-box classes="stats">
        <section>
          <h2>Languages</h2>
          <ul>
            <li>Ruby</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>PHP</li>
          </ul>
        </section>
        <section>
          <h2>Web server frameworks</h2>
          <ul>
            <li>Ruby on Rails</li>
            <li>Django</li>
            <li>Node</li>
            <li>Laravel</li>
          </ul>
        </section>
        <section>
          <h2>Web client frameworks</h2>
          <ul>
            <li>React</li>
            <li>Vue</li>
          </ul>
        </section>
      </info-box>
      <info-box classes="employment">
        <section>
          <section>
            <h2>Employers</h2>
            <ul>
              <li><a href="http://libboo.com/">Libboo</a>&nbsp;(06.13 - 02.14)</li>
              <li><a href="http://thoughtbot.com">thoughtbot</a>&nbsp;(06.14 - 04.18)</li>
              <li><a href="http://stridenyc.com">Stride </a>&nbsp;(05.18 - now)</li>
            </ul>
          </section>
          <section>
            <h2>Clients</h2>
            <ul>
              <li>Planned Parenthood</li>
              <li>Kickstarter</li>
              <li>Groupon</li>
              <li>Shutterstock</li>
              <li><em>And more!</em></li>
            </ul>
          </section>
        </section>
      </info-box>
      <info-box classes="points-of-interest">
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
import ResumeHeader from '@/components/Resume/Header.vue';

export default {
  name: 'resume',
  components: {
    Finder,
    InfoBox,
    ResumeHeader,
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

$text-grey: #383737;

$fuschia: #FF00FF;
$light-pink: #f7c3f7;
$pink: #fc3598;

$stolen-purple: #a404f4;
$plum: #932afc;
$lavender: #dfc2fc;

$powder-blue: #d9fcfc;
$eighties-ski-jacket: #00c9c9;
$teal: #0eeded;

$background-green: #c7fcc9;
$border-green: #03b209;
$shadow-green: #04ed0c;

a {
  color: $fuschia;
  text-decoration: none;
}

a:visited {
  color: $stolen-purple;
}

a:hover {
  font-style: italic;
}

h1 {
  color: black;
  font-stretch: condensed;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  color: black;
  font-stretch: condensed;
  margin-top: 5px;
  margin-bottom: 5px;
}

h3 {
  color: black;
  font-stretch: condensed;
}

ul {
  margin-top: 0;
  padding-left: 10px;
}

li {
  line-height: 1.6em;
  list-style: none;
}

.resume {
  display: grid;
  color: $text-grey;
  grid-column-gap: 40px;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-row-gap: 20px;
  }
}

.header {
  background: $lavender;
  border-bottom: 1px solid $stolen-purple;
  border-top: 1px solid $stolen-purple;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    border: 1px solid $stolen-purple;
    border-radius: 3px;
    box-shadow: 5px 6px 0px $plum;
    grid-column: 2 / span 3;
    grid-row: 1;
  }
}

.stats {
  background: $light-pink;
  border-top: 1px solid $fuschia;
  border-bottom: 1px solid $fuschia;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    border: 1px solid $fuschia;
    border-radius: 3px;
    box-shadow: 5px 6px 0px $pink;
    grid-column: 1;
    grid-row: 1;
  }
}

.employment {
  background: $background-green;
  border-top: 1px solid $border-green;
  border-bottom: 1px solid $border-green;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    border: 1px solid $border-green;
    border-radius: 3px;
    box-shadow: 5px 6px 0px $shadow-green;
    grid-column: 1;
    grid-row: 2;
  }
}

.points-of-interest {
  background: $powder-blue;
  border-top: 1px solid $eighties-ski-jacket;
  border-bottom: 1px solid $eighties-ski-jacket;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    border: 1px solid $eighties-ski-jacket;
    border-radius: 3px;
    box-shadow: 5px 6px 0px $teal;
    grid-column: 2 / span 3;
    grid-row: 2;
  }
}
</style>
