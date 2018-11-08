<template>
  <section>
    <h1>panOpen</h1>
    <p><strong>Duration:</strong> 3.5 months</p>
    <p><strong>Technologies:</strong> Ruby on Rails, React, Ember</p>
    <p><strong>Site:</strong>&nbsp;<a href="https://www.panopen.com/">https://www.panopen.com/</a></p>
    <p>
      panOpen was facing some serious performance problems, particularly in
      their online textbook feature. The majority of their users were at
      community colleges with slow internet connections, using older and less
      performant computers. We used built-in browser tools to throttle our
      connection and find the causes of the reported slow page loads and
      interactions. Then we worked with the panOpen dev team to split up and
      de-bloat their JS bundle, and to asynchronize actions that were unnecessarily
      slowing down their TTI.
    </p>
  </section>
</template>

<script>
export default {
  name: 'panopen',
};
</script>
