<template>
  <finder>
    <div class="resume">
      <section class="sidebar">
        <section class="stats">
          <section>
            <h2>Employers</h2>
            <ul>
              <li>Libboo</li>
              <li>thoughtbot</li>
              <li>Stride</li>
            </ul>
          </section>
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
              <li>Node**</li>
              <li>Laravel**</li>
            </ul>
          </section>
          <section>
            <h2>Web client frameworks</h2>
            <ul>
              <li>React</li>
              <li>Angular**</li>
              <li>Ember**</li>
            </ul>
          </section>
        </section>
      </section>
      <section class="main">
      <header>
          <h1>Name: Avielle Wolfe</h1>
          <p>Employed as a web developer since: May, 2013</p>
        </header>
        <section>
          <h2>Points of interest</h2>
          <p>Ungendering of thoughtbot NYC office restrooms: https://robots.thoughtbot.com/we-ungendered-our-restrooms-and-you-can-too</p>
          <p>
            Authoring of thoughtbot's response to Executive Order 13769:
            https://robots.thoughtbot.com/reaction-to-executive-order-13769.
            It was published anonymously to protect me from the less tolerant parts of
            the Internet. Verification can be provided up request.
          </p>
          <p>
            Renaming of factory_girl to factory_bot:<br/>
            https://github.com/thoughtbot/factory_bot/pull/1051<br/>
            https://robots.thoughtbot.com/factory_bot<br/>
            <br/>
            On this one, enormous thanks to Josh Clayton and others in thoughtbot
            who assisted me and handled the response.
          </p>
        </section>
      </section>
    </div>
  </finder>
</template>

<script>
import Finder from '@/components/Finder.vue';

export default {
  name: 'resume',
  components: {
    Finder,
  },
};
</script>

<style scoped lang="scss">
$fuschia: #FF00FF;
$light-pink: #f7c3f7;
$pink: #fc3598;
$text-grey: #666666;

.resume {
  display: grid;
}

.sidebar {
  grid-column: 1;
  padding-right: 50px;
}

.main {
  grid-column: 2 / span 3;
}

.stats {
  background: $light-pink;
  border: 1px solid $fuschia;
  border-radius: 3px;
  box-shadow: 5px 6px 0px $pink;
  color: $text-grey;
  padding: 10px 12px;

  h2 {
    color: black;
    font-stretch: condensed;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ul {
    margin-top: 0;
    padding-left: 10px;
  }

  li {
    list-style: none;
    line-height: 1.6em;
  }
}
</style>
