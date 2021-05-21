<!-- Admin login menu-->
<template>
  <div class="login" role="main">
    <form class="logginn-container">
        <table>
          <tbody>
       <th colspan=2>{{ loginmsg }}</th>
          <tr>
            <td >
              <label for="username">{{ username }}</label>
            </td>
            <td>
              <input class="logginn-input" type="text" name="username" id="username"/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">{{ password }}</label>
            </td>
            <td>
            <input class="logginn-input" type="password" name="password" id="password" />
            </td>
          </tr>
          </tbody>
        </table>
      <button @click="login" id="loginbtn" class="logginn-btn logginn-purple">
        Logg inn
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdLogin",
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
      loginmsg: "Innlogging (Kun for admin)",
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

.loginn-input{
  align-content: left;
}
td{
  text-align: right;
}
th{
  font-size: 25px;
  padding: 3%;
}

</style>