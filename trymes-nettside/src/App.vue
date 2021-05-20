<template>
  <div id="app">
    
    <headerPage/>


    <NavPage/>

    <router-view />

    <!--<div id="footer">
      <p>Bunntekst</p>
    </div>-->

  </div>
</template>

<script>
import HeaderPage from "@/components/Header.vue"
import NavPage from "@/components/Navigation.vue"

export default {
  name: 'app',
  components: {
    HeaderPage,
    NavPage
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

#header {
  width: 100%;
  height: 100px;
  background-color: #98473E;
}

#nav {
  font-size: 20px;
  padding: 5px;
  background-color: #98473E;
  
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffff;
}

#nav a.router-link-exact-active {
  color: #ffff;
}

#nav a:hover{
  text-decoration: underline;
}

#footer {
  border: 2px red dotted;
  margin-bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
