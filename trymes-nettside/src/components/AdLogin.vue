<template>
    <div class="login">
      <h1>{{ loginmsg }}</h1>

      <form class="logginn-container">
        <p>
          <label>Brukernavn </label>
          <input class="logginn-input" type="text">
        </p>
        <p>
          <label>Passord </label>
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
.login{
  border: 2px;
  border-color: black;
  border-style: solid;
  justify-content: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>