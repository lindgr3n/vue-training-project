<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <footer class="footer">
      <div>
        <div class="fill" />
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer {
  padding: 1em;
}

footer > div {
  display: flex;
  flex: 1;
  padding-right: 10px;
  height: 32px;
  min-height: 36px;
  background-color: #eee;
  align-items: center;
  justify-content: flex-end;
}
</style>
