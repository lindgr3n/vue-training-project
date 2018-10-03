<template>
  <div>
    <geo-location />
    <render-less-geo-location />
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
</style>
