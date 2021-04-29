<template>
  <div class="admenu">
    <AdMenu menumsg="Meny Admin" />
  </div>
</template>

<script>
// @ is an alias to /src
import AdMenu from "@/components/AdMenu.vue";

export default {
  name: "Menu",
  components: {
    AdMenu,
  },
};
</script>