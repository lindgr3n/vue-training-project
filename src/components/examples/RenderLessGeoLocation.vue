<script>
export default {
  data() {
    return {
      location: { longitude: null, latitude: null }
    };
  },

  methods: {
    appendLocation(location) {
      this.location = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      };
    }
  },

  computed: {
    isGeoLocationSupported() {
      return "geolocation" in navigator;
    },

    embededOpenStreetMapUrl() {
      if (!(this.location.longitude && this.location.latitude)) return;
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

  mounted() {
    // https://whatwebcando.today/geolocation.html
    navigator.geolocation.getCurrentPosition(location => {
      this.appendLocation(location, "fetched");
    });
    navigator.geolocation.watchPosition(this.appendLocation);
  },

  render() {
    return this.$scopedSlots.default({
      location: this.location,
      isGeoLocationSupported: this.isGeoLocationSupported,
      embededOpenStreetMapUrl: this.embededOpenStreetMapUrl,
      linkOpenSteetMapUrl: this.linkOpenSteetMapUrl,
      linkGoogleMapUrl: this.linkGoogleMapUrl
    });
  }
};
</script>

<style scoped>
</style>
