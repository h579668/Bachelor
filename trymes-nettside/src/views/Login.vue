<template>
  <div class="login">
    <AdLogin loginmsg="Innlogging (Kun for admin)" />
  </div>
</template>

<script>
// @ is an alias to /src
import AdLogin from "@/components/AdLogin.vue";

export default {
  name: "Login",
  components: {
    AdLogin,
  },
};
</script>