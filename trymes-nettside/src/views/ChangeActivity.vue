<template>
  <div class="deleteActivity">
    <DeleteActivity :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteActivity from "@/components/ChangeActivityPage.vue";

export default {
  name: "ChangeActivity",
  
  components: {
    DeleteActivity,
  },
  data() {
    return {
      msg: "Endre en aktivitet",
    }
  },
};
</script>