<template>
  <finder>
    <header>
      <h1>Name: Avielle Wolfe</h1>
      <p>Employed as a web developer since: May, 2013</p>
    </header>
    <hr/>
    <section>
      <p>Employers: 3</p>
      <ul>
        <li>Libboo: SAAS startup</li>
        <li>thoughtbot: design and development consultancy</li>
        <li>Stride: development consultancy</li>
      </ul>
      <p>Clients: 14</p>
      <p>Languages used professionally: Python, Javascript, Ruby, PHP</p>
      <p>Web server frameworks used professionally: Ruby on Rails, Django, Node*, Laravel</p>
      <p>Web client frameworks used professionarlly: React, Angular*, Ember*</p>
      <p>*: I've used these on client projects, but I wouldn't call myself proficient in them.</p>
    </section>
    <hr/>
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
