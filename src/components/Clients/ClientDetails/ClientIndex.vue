<template>
  <section>
    <p>Select a client from the menu to see details of that client.</p>
    <h2>Some particularly interesting clients may be:</h2>
    <ul>
      <li><router-link to="/clients/kickstarter">Kickstarter</router-link></li>
      <li><router-link to="/clients/advocacy-institute">Advocacy Institute</router-link></li>
      <li><router-link to="/clients/panopen">panOpen</router-link></li>
      <li><router-link to="/clients/shutterstock">Shutterstock</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'client-index',
};
</script>
