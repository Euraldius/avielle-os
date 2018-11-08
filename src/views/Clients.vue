<template>
  <finder>
    <div class="clients">
      <client-list classes="client-list" />
      <client classes="header" :page="$route.params.name" />
    </div>
  </finder>
</template>

<script>
import Finder from '@/components/Finder.vue';
import ClientList from '@/components/Clients/ClientList.vue';
import Client from '@/components/Clients/Client.vue';

export default {
  name: 'clients',
  components: {
    Finder,
    Client,
    ClientList,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.clients {
  display: grid;
  color: $text-grey;
  grid-column-gap: 40px;

  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-row-gap: 20px;
  }
}

.client-list {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 1;
    grid-row: 1;
  }
}

.header {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    grid-column: 2 / span 3;
    grid-row: 1;
  }
}
</style>
