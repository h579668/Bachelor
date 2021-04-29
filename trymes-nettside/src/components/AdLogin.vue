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
        <button @click="login" id="loginbtn" class="logginn-btn logginn-purple">Logg inn</button>
      </form>
  
    </div>
</template>

<script>
export default {
  name: "AdLogin",
  props: {
    loginmsg: String,
  },
  methods: {
    login() {
      this.$router.push({path: '/admenu'});
      //window.location.href = "http://localhost:8080/?#/admenu"
    }
  }
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