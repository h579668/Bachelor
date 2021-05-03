<template>
  <div class="login">
    <h1>{{ loginmsg }}</h1>
    <form class="logginn-container">
      <tbody>
        <table>
       <!---   <th>{{ loginmsg }}</th>-->
          <tr>
            <td>
              <label>{{ username }}</label>
            </td>
            <td>
              <input class="logginn-input" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>{{ password }}</label>
            </td>
            <input class="logginn-input" type="password" />
            <td></td>
          </tr>
        </table>
      </tbody>
      <button @click="login" id="loginbtn" class="logginn-btn logginn-purple">
        Logg inn
      </button>
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
      this.$router.push({ path: "/admenu" });
      //window.location.href = "http://localhost:8080/?#/admenu"
    },
  },
  data () {
    return {
      username: "Brukernavn:",
      password: "Passord:",
    };
  }
};
</script>

<style scoped>
.login {
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

td {
  text-align: right;
}

</style>