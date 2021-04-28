<template>
    <div class="loggIn">
        <h1>{{ loginmsg }}</h1>

    <form class="logginn-container">
    <label>Brukernavn</label>
    <input class="logginn-input" type="text">

    <label>Passord</label>
    <input class="logginn-input" type="password">

    <button class="logginn-btn logginn-purple">Logg inn</button>

    </form>
    

    </div>
</template>

<script>
export default {
  name: "AdloggInn",
  props: {
    loginmsg: String,
  },
};
</script>

<style scoped>


</style>