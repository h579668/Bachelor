<template>
  <div >
    <QuestionPage title = "Velkommen til test-siden!" />
    <QuestionPage information = "Hei og hå, stå no på!" />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11" type="JavaScript"></script>

<script>
import QuestionPage from "@/components/QuestionPage.vue";

export default {
  name: "Quiz",
  components: {
     QuestionPage,
  },
};
</script>

<style scoped>

</style>