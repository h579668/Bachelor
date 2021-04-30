<template>
  <div class="home">
    <HomePage :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  
  components: {
    HomePage,
  },
  data() {
    return {
      msg: "Velkommen",
    }
  },
};
</script>
