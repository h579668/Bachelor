<template>
  <div class="pass">
    <h1>{{ changePassMsg }}</h1>
    <form class="newpass-container">
      <tbody>
        <table>
       <!---   <th>{{ loginmsg }}</th>-->
          <tr>
            <td>
              <label>{{ oldPass }}</label>
            </td>
            <td>
              <input class="newpass-input" type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <label>{{ password }}</label>
            </td>
            <input class="newpass-input" type="password" />
            <td></td>
          </tr>
          <tr>
            <td>
              <label>{{ repeatPass }}</label>
            </td>
            <input class="newpass-input" type="password" />
            <td></td>
          </tr>
        </table>
      </tbody>
      <button @click="change" id="changebtn" class="changebtn newpass-purple">
        Endre passord
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChangePass",
  methods: {
    change() {
      window.alert("Passordet ble endret.");
      this.$router.push({ path: "/admenu" });
    },
  },
  data () {
    return {
      oldPass: "Gammelt passord:",
      password: "Nytt passord:",
      repeatPass: "Gjenta det nye passordet:",
      changePassMsg:"Endre passord"
    };
  }
  
};
</script>

<style scoped>
.pass {
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