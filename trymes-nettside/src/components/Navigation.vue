<!-- contains the three main navigation at the top of the page-->
<template>
    <div id="nav">
       <router-link :to="{ name: 'AddToActivity' }">Legg til forbund, område eller alder</router-link>
      <router-link :to="{ name: 'HomePage' }" > Hjem </router-link> |
      <router-link :to="{ name: 'AdLogin' }">Logg Inn</router-link>|
      <router-link :to="{ name: 'AllActivities' }">Alle aktiviteter</router-link>
    </div>
</template>

<script>

export default {
}

</script>

<style scoped>
#nav {
  font-size: 20px;
  padding: 5px;
  background-color: #5ead73;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffff;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #ffc0cb;
}

#nav a:hover{
  text-decoration: underline;
}

</style>