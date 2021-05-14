<template>
    <div>
        <h1> Kommer ja/nei spørsmål</h1>
         <button @click="changeComponent" id="nextQuestionPage" class="question-btn question-purple">
        Neste
      </button>
    </div>
</template>

<script>
    export default {
        methods: {
            changeComponent(){
                this.$emit("nextComponent","QuestionPage");
            }
        }
        
    }
</script>

<style scoped>
#nextQuestionPage {
  background-color: #424242;
  color: #ffffff;
  font-size: 30px;
}

#nextQuestionPage:hover {
   background-color: #548687;
 }

</style>