<template>
  <div class="gallery">
    <router-link :to="route">
      <h3>{{title}}</h3>
      <div class="desc">{{description}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

<style scoped>
div.gallery {
  /* margin: 5px; */
  border: 1px solid #ccc;
  box-shadow: 0px 2px 2px #888888;
  display: flex;
  width: 190px;
}

div.gallery:hover {
  border: 1px solid #777;
}
div.gallery a:visited {
  color: inherit;
}

div.gallery .desc {
  padding: 8px;
  text-align: center;
}
</style>
