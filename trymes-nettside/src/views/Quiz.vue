<template>
  <div>
    <div>
      <QuestionPage :title="title" :information="information" />
    </div>
    
  </div>
</template>

<script>
import QuestionPage from "@/components/QuestionPage.vue";

export default {
  name: "Quiz",
  components: {
    QuestionPage,
  },
  data() {
    return {
      title: "Hvordan du liker å trene?",
      information: "Kartlegging av hvordan du liker å drive aktiviteter",
    }
  },
  
};
</script>
