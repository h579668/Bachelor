<template>
  <div class="quiz">
    <h1>Velkommen til test-siden!</h1>
    <p>Informasjonstekst: Hei og hå, stå no på!</p>
    <div>
      <h2> Hvor god er du i styrke?</h2>
      <input type="radio" name="answer1" value="God" />
      <label> God </label><br />
      <input type="radio" name="answer1" value="Noe god" />
      <label> Noe god </label><br />
      <input type="radio" name="answer1" value="Ikke god" />
      <label> Ikke god </label>

      <h2>Hvor god er du i hurtighet?</h2>
      <input type="radio" name="answer2" value="God" />
      <label> God </label><br />
      <input type="radio" name="answer2" value="Noe god" />
      <label> Noe god </label><br />
      <input type="radio" name="answer2" value="Ikke god" />
      <label> Ikke god </label>

      <h2>Hvor god utholdenhet har du</h2>
      <input type="radio" name="answer3" value="God" />
      <label> God </label><br />
      <input type="radio" name="answer3" value="Noe god" />
      <label> Noe god </label><br />
      <input type="radio" name="answer3" value="Ikke god" />
      <label> Ikke god </label>

      <h2>Hvor god balanse har du?</h2>
      <input type="radio" name="answer4" value="God" />
      <label> God </label><br />
      <input type="radio" name="answer4" value="Noe god" />
      <label> Noe god </label><br />
      <input type="radio" name="answer4" value="Ikke god" />
      <label> Ikke god </label>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
<script>/*
new Vue({
  el: "#quiz",
  data() {
    return {
      quizItems: {
        question1:"Hvor god er du i styrke?",
        question2:"Hvor god er du i balanse?",
        question3:"Hvor god hurtighet har du?(Hvor raskt kan du løpe?)",
        question4:"Hvor god utholdenhet har du?(Kan du løpe/gå lenge?",
      }
    };
  }
});*/
  export default {
    
  }
</script>

<style scoped>

</style>
