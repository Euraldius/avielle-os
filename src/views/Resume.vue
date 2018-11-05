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
        <header class="header">
          <h1>Avielle Wolfe</h1>
          <p><a href="mailto:aviellewolfe@pm.me">aviellewolfe@pm.me</a></p>
          <h2>Professional web developer since:</h2>
          <p class="response">May, 2013</p>
        </header>
        <section class="points-of-interest">
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
              the Internet. (Verification can be provided up request.)
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

.resume {
  display: grid;
  color: $text-grey;
}

.header {
  background: $lavender;
  border: 1px solid $stolen-purple;
  border-radius: 3px;
  box-shadow: 5px 6px 0px $plum;
  padding-left: 30px;
  padding-bottom: 30px;

  h1 {
    color: $text-grey;
    font-family: Halloween;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 20px;
    src: url(../assets/fonts/halloween.woff);
    text-decoration: underline;
  }

  h2 {
    font-size: 1.2em;
    padding-bottom: 0px;
  }

  .response {
    font-size: 1.5em;
    font-weight: bold;
    padding-left: 10px;
    margin: 0;
  }
}

.sidebar {
  grid-column: 1;
  margin-top: 50px;
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
  padding: 10px 12px;

  ul {
    margin-top: 0;
    padding-left: 10px;
  }

  li {
    list-style: none;
    line-height: 1.6em;
  }
}

.points-of-interest {
  background: $powder-blue;
  border: 1px solid $eighties-ski-jacket;
  border-radius: 3px;
  box-shadow: 5px 6px 0px $teal;
  margin-top: 50px;
  padding: 10px 12px;
}
</style>
