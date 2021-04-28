<template>
  <div class="loggIn">
    <AdLoggInn loginmsg="Innlogging (Kun for admin)" />
  </div>
</template>

<script>
// @ is an alias to /src
import AdLoggInn from "@/components/AdLoggInn.vue";

export default {
  name: "AdloggInn",
  components: {
    AdLoggInn,
  },
};
</script>