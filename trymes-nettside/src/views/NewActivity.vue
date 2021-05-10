<template>
  <div class="activities">
    <CreateNewActivity :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewActivity from "@/components/CreateNewActivity.vue";

export default {
  name: "Activities",
  
  components: {
    CreateNewActivity,
  },
  data() {
    return {
      msg: "Legg til ny aktivitet",
    }
  },
};
</script>
