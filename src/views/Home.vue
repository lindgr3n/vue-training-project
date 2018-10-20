<template>
  <div class="home">
    <header class="banner">
      <img 
        :src="html5Logo" 
        class="logo" >
      <div>
        <h1>What Web Can Do In Vue</h1>
        <p>Examples from https://whatwebcando.today/ done in Vue!</p> 
      </div>
      <img 
        :src="vueLogo" 
        class="logo" >
    </header>
    <div class="category-wrapper">
      <div 
        v-for="category in categories" 
        :key="category.key" 
        class="category-card">
        <div class="category-title"><h3>{{ category.label }}</h3></div>
        <ul class="category-sections">
          <li 
            v-for="page in Object.keys(category.pages)" 
            :key="page" 
            class="category-sections-item"><router-link 
              :to="category.pages[page].route" 
              class="category-sections-item-link"><i class="category-section-item-icon material-icons">{{ category.pages[page].icon }}</i>{{ category.pages[page].label }}</router-link></li>
        </ul>
      </div>

    </div>
    <!-- <h1>Examples</h1>
      <div class="gallery">
        <gallery-item route="/geo-location" title="GeoLocation" description="Geo location and how to use it..."></gallery-item>
      </div> -->
      
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem.vue";
import html5Logo from "@/assets/html5logo.svg";
import vueLogo from "@/assets/vueLogo.png";
import content from "@/content.json";

export default {
  name: "Home",
  components: {
    GalleryItem
  },

  data() {
    return {
      html5Logo,
      vueLogo,
      content
    };
  },

  computed: {
    categories() {
      const categories = Object.keys(this.content.categories).map(key =>
        Object.assign({}, this.content.categories[key], { key })
      );

      return categories;
    }
  }
};
</script>

<style scoped>
/* .gallery {
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
} */

header {
  background: url(/../../assets/logo.png) left center no-repeat;
  background-size: 115px;
}

.banner {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.logo {
  height: 100px;
}

.category-wrapper {
  display: grid;
  padding: 2em 1em 0 1em;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.category-card {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24), 0 -2px 0 #eee;
}
.category-title {
  background-color: #009688;
  color: white;
  padding: 0.5em;
}
.category-sections {
  list-style-type: none;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1em;
}

.category-sections-item {
  list-style-type: none;
}

.category-sections-item-link {
  display: flex;
  align-items: center;
  color: inherit;
}

.category-section-item-icon {
  padding: 10px;
}
</style>
