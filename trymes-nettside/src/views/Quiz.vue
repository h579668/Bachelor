<template>
  <div>
    <div>
      <component @nextComponent="changeComponent" :is="selectedComponent" :name="selectedComponent"></component>
    </div>
    
  </div>
</template>

<script>
import QuestionPage from "@/components/QuestionPage.vue";
import QuestionYesNo from "@/components/QuestionYesNo.vue"

export default {
  name: "Quiz",
  components: {
    QuestionPage,
    QuestionYesNo
  },
  data() {
    return {
      selectedComponent: QuestionYesNo,
      title: "Hvordan liker du å trene?",
      information: "Kartlegging av hvordan du liker å drive med aktiviteter",
      yesNoTitle: "Nå har vi noen ja/nei spørsmål",
    }
  },
  methods: {
    changeComponent(component) {
      this.selectedComponent = component;
    }
  },
  
};
</script>
