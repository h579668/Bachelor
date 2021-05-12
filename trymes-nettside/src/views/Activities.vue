<template>
  <div class="activities">
    <ActivityList :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import ActivityList from "@/components/ActivityList.vue";

export default {
  name: "Activities",
  
  components: {
    ActivityList,
  },
  data() {
    return {
      msg: "Aktiviteter med egenskaper",
    }
  },
};
</script>
