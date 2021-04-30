<template>
  <div class="admenu">
    <h1>{{ menumsg }}</h1>

    <form class="logginn-container">
      <p>Legg til ny aktivitet</p>
      <p>Endre/slette aktivitet</p>
      <p>Se alle registrerte aktiviteter</p>
      <p>Redigere geografiske områder</p>
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
</style>