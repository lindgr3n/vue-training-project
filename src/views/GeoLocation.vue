<template>
  <div>
    <geo-location />
    <h3>Renderless replica</h3>
    <render-less-geo-location >
      <div class="renderless-container" slot-scope="{location, linkOpenSteetMapUrl, linkGoogleMapUrl, embededOpenStreetMapUrl, isGeoLocationSupported }">
        {{location}}
        <a :href="linkOpenSteetMapUrl" target="_blank">View in Open Street map</a>
        <a :href="linkGoogleMapUrl" target="_blank">View in Google maps</a>
        <iframe width="450" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="embededOpenStreetMapUrl" style="border: 1px solid black"></iframe><br/><small><a :href="linkOpenSteetMapUrl">Visa större karta</a></small>
        <span v-if="!isGeoLocationSupported">Geolocation API not supported.</span>
      </div>
    </render-less-geo-location>
    <h3>Renderless minimal</h3>
    <render-less-geo-location >
      <div class="renderless-container" slot-scope="{location }">
        {{location}}
      </div>
    </render-less-geo-location>
  </div>
</template>

<script>
import GeoLocation from "@/components/examples/GeoLocation.vue";
import RenderLessGeoLocation from "@/components/examples/RenderLessGeoLocation.vue";
export default {
  components: {
    GeoLocation,
    RenderLessGeoLocation
  }
};
</script>

<style scoped>
.renderless-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
