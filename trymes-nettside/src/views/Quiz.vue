<template>
  <div>
    <QuestionPage :title="title" :information="information" />
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
      title: "Velkommen til test-siden!",
      information: "Hei og hå, stå no på!",
    };
  },
};

</script>
