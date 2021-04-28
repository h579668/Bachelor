<template>
    <div class="login">
      <h1>{{ loginmsg }}</h1>

      <form class="logginn-container">
        <p>
          <label>Brukernavn</label>
          <input class="logginn-input" type="text">
        </p>
        <p>
          <label>Passord</label>
          <input class="logginn-input" type="password">
        </p>
        <button class="logginn-btn logginn-purple">Logg inn</button>
      </form>
  
    </div>
</template>

<script>
export default {
  name: "AdLogin",
  props: {
    loginmsg: String,
  },
};
</script>

<style scoped>


</style>