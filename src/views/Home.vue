<template>
  <div class="home">
    <div>
      <h1>Examples</h1>
      <div class="gallery">
        <gallery-item route="/geo-location" title="GeoLocation" description="Geo location and how to use it..."></gallery-item>
      </div>
      
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";

export default {
  name: "home",
  components: {
    GalleryItem
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
