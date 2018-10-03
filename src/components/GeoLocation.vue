<template>
  <div class="container">
    {{location}}
    <a :href="linkOpenSteetMapUrl" target="_blank">View in Open Street map</a>
    <a :href="linkGoogleMapUrl" target="_blank">View in Google maps</a>
    <iframe width="450" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="embededOpenStreetMapUrl" style="border: 1px solid black"></iframe><br/><small><a :href="linkOpenSteetMapUrl">Visa större karta</a></small>
    <span v-if="!isGeoLocationSupported">Geolocation API not supported.</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: { longitude: null, latitude: null }
    };
  },
  computed: {
    isGeoLocationSupported() {
      return "geolocation" in navigator;
    },

    embededOpenStreetMapUrl() {
      return `https://www.openstreetmap.org/export/embed.html?bbox=${
        this.location.longitude
      }%2C${this.location.latitude}%2C${this.location.longitude}%2C${
        this.location.latitude
      }&amp;layer=mapnik`;
    },

    linkOpenSteetMapUrl() {
      return `https://www.openstreetmap.org/#map=17/${this.location.latitude}/${
        this.location.longitude
      }`;
    },
    linkGoogleMapUrl() {
      return `https://www.google.com/maps?&z=15&q=${this.location.latitude}+${
        this.location.longitude
      }&ll=${this.location.latitude}+${this.location.longitude}`;
    }
  },

  methods: {
    appendLocation(location) {
      this.location = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      };
    }
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(location => {
      this.appendLocation(location, "fetched");
    });
    // const watchId = navigator.geolocation.watchPosition(this.appendLocation);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
