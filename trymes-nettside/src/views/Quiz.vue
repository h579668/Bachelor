<template>
  <div>
    <div>
      <QuestionPage :title="title" :information="information" />
    </div>
    <div>
      <button
        @click="result"
        id="resultbtn"
        class="restult-btn result-purple"
      >
        Gå til resultater
      </button>
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
      title: "Velkommen til test-siden!",
      information: "Hei og hå, stå no på!",
    }
  },
  methods: {
    result() {
      this.$router.push({ path: "/quiz/results" });
    },
  }
};
</script>
