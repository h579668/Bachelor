<template>
  <div class="quiz">
   <Quiz headline="Ta quizen!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from "@/components/Quiz.vue";

export default {
  name: "QuizPage",
  components: { 
    Quiz,
    },
 
};
</script>
