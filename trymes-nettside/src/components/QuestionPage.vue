
<template>
    <div>
        <h1> {{ title}} </h1>
        {{ information }} 
      <div v-for="item in quizItems" :key="item.question">
          <h2> {{ item.question }}</h2>
          <input type="radio" :name= "item.id " value="God" />
          <label> God </label><br />
           <input type="radio" :name= "item.id" value="Noe god" />
          <label> Noe god </label><br />
          <input  type="radio" :name= "item.id" value="Ikke god" />
          <label> Ikke god </label>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11" type="JavaScript"></script>
<script>
export default {
   name: "QuestionPage",
   props: ['title', 'information'], //INFORMATION DOES NOT WORK 
        data() {
        return {
              quizItems: [
                { id: '1', question: 'Hvor god er du i styrke?' },
                { id: '2', question: 'Hvor god er du i balanse?' },
                { id: '3', question: 'Hvor god hurtighet har du?(Hvor raskt kan du løpe?)' },
                { id: '4', question: 'Hvor god utholdenhet har du?(Kan du løpe/gå lenge?' },
                { id: '5', question: 'Er du god i orientering?(Lese kart og løpe til riktige avmerkede punkter)' } 
             ]};
        },
        
    };
</script>

<style scoped>

</style>

