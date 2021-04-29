<template>
  <div id="app">
    <div id="header">
      <p>header kommer senere</p>
    </div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Quiz' }">Quiz</router-link> |
      <router-link :to="{ name: 'Login' }">Logg Inn</router-link>
    </div>
    <router-view />
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
  background-color: #865F6D;
}

#nav {
  padding: 5px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
