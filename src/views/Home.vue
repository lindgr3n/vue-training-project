<template>
  <div class="home">
    <geo-location />
    <render-less-geo-location />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GeoLocation from "@/components/GeoLocation.vue";
import RenderLessGeoLocation from "@/components/RenderLessGeoLocation.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    GeoLocation,
    RenderLessGeoLocation
  }
};
</script>
