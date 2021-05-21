<!-- Menu for the admin, overview for possible future actions-->
<template>
<!-- role="main" means that it is the main content on the page-->
  <div class="admenu" role="main">
    <h1>{{ menumsg }}</h1>

    <form class="logginn-container">
      <p><router-link :to="{ name: 'CreateNewActivity' }">Legg til ny aktivitet</router-link></p>
      <p><router-link :to="{ name: 'ChangeActivity' }">Endre/slette aktivitet</router-link></p>
      <p><router-link :to="{ name: 'Activities' }">Se alle registrerte aktiviteter</router-link></p>
      <p>Redigere geografiske områder</p>
      <p><router-link :to="{ name: 'ChangePassword' }">Endre passord</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdMenu",
  data(){
    return{
        menumsg: "Admin Meny"
    }
  }
  
};
</script>

<style scoped>
.admenu {
  border: 2px;
  border-color: black;
  border-style: solid;
  justify-content: center;
  position: absolute;
  padding: 0 10% 2% 10%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
p:hover {
  text-decoration:underline;
}
</style>