<template>
  <div class="admenu">
    <h1>{{ menumsg }}</h1>

    <form class="logginn-container">
      <p><router-link :to="{ name: 'NewActivity' }">Legg til ny aktivitet</router-link></p>
      <p><router-link :to="{ name: 'ChangeActivity' }">Endre/slette aktivitet</router-link></p>
      <p><router-link :to="{ name: 'Activities' }">Se alle registrerte aktiviteter</router-link></p>
      <p>Redigere geografiske områder</p>
      <p><router-link :to="{ name: 'Password' }">Endre passord</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdMenu",
  props: {
    menumsg: String,
  },
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