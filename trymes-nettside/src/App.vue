<template>
  <div id="app">
    
    <headerPage/>

    <router-view />

    <!--<div id="footer">
      <p>Bunntekst</p>
    </div>-->

  </div>
</template>

<script>
import HeaderPage from "@/components/Header.vue"
//import NavPage from "@/components/Navigation.vue"

export default {
  name: 'app',
  components: {
    HeaderPage,
    //NavPage
  },
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
