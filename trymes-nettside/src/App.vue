<template>
  <div id="app">

    <div id="header">
      <p>header kommer senere</p>
    </div>

    <div id="nav">
      <router-link :to="{ name: 'Home' }">Hjem</router-link> |
      <router-link :to="{ name: 'Login' }">Logg Inn</router-link>|
      <router-link :to="{ name: 'AllActivities' }">Alle aktiviteter</router-link>
    </div>

    <router-view />

    <!--<div id="footer">
      <p>Bunntekst</p>
    </div>-->

  </div>
</template>

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
