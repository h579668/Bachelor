<template>
  <div>
    <div>
      <QuestionPage :title="title" :information="information" />
     <!-- <QuestionYesNo :yeNoTite="yesNoTitle" /> -->
    </div>
    
  </div>
</template>

<script>
import QuestionPage from "@/components/QuestionPage.vue";
//import QuestionYesNo from "@/components/QuestionYesNo.vue"

export default {
  name: "Quiz",
  components: {
    QuestionPage,
  },
  data() {
    return {
      title: "Hvordan liker du å trene?",
      information: "Kartlegging av hvordan du liker å drive med aktiviteter",
      //yesNoTitle: "Nå har vi noen ja/nei spørsmål",
    }
  },
  
};
</script>
