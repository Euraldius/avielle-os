<template>
  <nav :class="classes">
    <button class="nav-toggle" v-on:click="showList = !showList">
      <img src="@/assets/images/black-cat.png" alt="black cat nav icon" />
      <span><em>Pet the cat to see more clients!</em></span>
    </button>
    <info-box classes="nav-body blue-box" v-if="navVisible">
      <ul class="client-link-list">
        <h1>Clients</h1>
        <h2>thoughtbot</h2>
        <li><a data-client="skilled-up" v-on:click="showClient">SkilledUp</a> (09.14 - 11.14)</li>
        <li><a data-client="merck" v-on:click="showClient">Merck</a> (11.14 - 01.15)</li>
        <li><a data-client="groupon" v-on:click="showClient">Groupon</a> (02.15 - 09.15)</li>
        <li>
          <a data-client="anheuser" v-on:click="showClient">Anheuser Beusch</a> (10.15 - 12.15)
        </li>
        <li>
          <a data-client="shutterstock" v-on:click="showClient">Shutterstock</a> (12.15 - 06.16)
        </li>
        <li><a data-client="panopen" v-on:click="showClient">panOpen</a> (07.16 - 10.16)</li>
        <li>
          <a data-client="lifeimage" v-on:click="showClient">
            lifeIMAGE Mammosphere
          </a> (10.16 - 11.16)
        </li>
        <li><a data-client="harrys" v-on:click="showClient">Harry's</a> (12.16 - 03.17)</li>
        <li>
          <a data-client="convertkit" v-on:click="showClient">ConvertKit</a> (03.17 - 07.17)
        </li>
        <li>
          <a
            data-client="advocacy-institute"
            v-on:click="showClient">
            Advocacy Institute
          </a> (08.17)
        </li>
        <li>
          <a data-client="qchatspace" v-on:click="showClient">Planned Parenthood</a> (09.17)
        </li>
        <li><a data-client="barkbox" v-on:click="showClient">Barkbox</a> (09.17 - 12.17)</li>
        <li>
          <a data-client="advocacy-institute-2" v-on:click="showClient">Advocacy Institute x2!</a>
          (01.18)
        </li>
        <li>
          <a data-client="kickstarter" v-on:click="showClient">Kickstarter</a> (02.18 - 04.18)
        </li>
        <h2>Stride</h2>
        <li><a data-client="joor" v-on:click="showClient">JOOR</a> (05.18 - 10.18)</li>
        <li><a data-client="two-u" v-on:click="showClient">2U</a> (11.18 - 02.19)</li>
      </ul>
    </info-box>
  </nav>
</template>

<script>
import router from '@/router';
import appConfig from '@/App.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'client-list',
  components: {
    InfoBox,
  },
  props: {
    classes: String,
  },
  data: function clientListData() {
    return {
      showList: false,
    };
  },
  computed: {
    navVisible: function navVisible() {
      if (window.innerWidth >= appConfig.MID_SIZE_DEVICE_BREAKPOINT) {
        return true;
      }

      return this.showList;
    },
  },
  methods: {
    showClient: function showClient(event) {
      event.preventDefault();

      this.showList = false;
      router.push(`/clients/${event.target.dataset.client}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/info_boxes.scss';

.client-link-list {
  a {
    cursor: pointer;
  }
}

.nav-body {
  h1, h2 {
    display: none;

    @media only screen and (min-width: $mid-size-device-breakpoint) {
      display: block;
      margin-left: -10px;
    }
  }
}

.nav-toggle {
  @media only screen and (min-width: $mid-size-device-breakpoint) {
    display: none;
    width: initial;
  }

  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;

  img, span {
    vertical-align: middle;
  }

  img {
    height: 40px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-top: 20px;
    width: 60px;
  }

  span {
    background-color: hsla(89%, 43%, 51%, 0.7);
    border-radius: 3px;
    color: white;
    display: inline-block;
    font-size: 1.3em;
    font-weight: bold;
    padding: 5px;
  }
}
</style>
