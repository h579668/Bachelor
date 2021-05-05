<template>
  <div class="pass">
    <ChangePass changePassMsg="Endre passord" />
  </div>
</template>

<script>
// @ is an alias to /src
import ChangePass from "@/components/ChangePassPage.vue";

export default {
  name: "Password",
  components: {
    ChangePass,
  },
};
</script>