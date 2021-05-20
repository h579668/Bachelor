<template>
  <div class="quiz">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ information }}</p>
    </div>

    <div v-for="(item, index) in quizItems" :key="index">
      <div id="questions">
        <h2>{{ item.question }}</h2>
        <p>{{ item.info }}</p>
        <div id="inputRadio">
          <input type="radio" :id="item.id + 'a'" :name="item.id" :value="item.id + 'a'" v-model="picked" />
          <label :for="item.id + 'a'"> Synes det er kjempegøy </label> <br />

          <input type="radio" :id="item.id + 'b'" :name="item.id" :value="item.id + 'b'" v-model="picked" />
          <label :for="item.id + 'b'"> Helt greit </label><br />

          <input type="radio" :id="item.id + 'c'" :name="item.id" :value="item.id + 'c'"  v-model="picked"/>
          <label :for="item.id + 'c'"> Liker ikke i det hele tatt </label>
        </div>
      </div>
    </div>

    <div>
      <button @click="changeComponent()" id="btn-navigation" class="btn-navigation navigation-purple">
        Gå tilbake
      </button>
      <!--<button @click="nextQuestions" id="btn-navigation" class="btn-navigation navigation-purple">
        Neste
      </button>-->
     <button @click="result" id="btn-navigation" class="btn-navigation navigation-purple">
        Gå til resultater
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionPage",
  props: { title: String, information: String },
  data() {
    return {
       minQuestions: 0,
       maxQuestions: 4,
       picked:null,
      quizItems: [
        {
          id: "1",
          question: "Styrkeøvelser",
          info: "(armhevinger, knebøy, situps, vekter osv)",
        },
        {
          id: "2",
          question: "Spenst/hurtighet",
          info: "(hopping, sprint, kasting osv)",
        },
        {
          id: "3",
          question: "Utholdenhet",
          info: "(gåturer, jogging, svømme langt, sykkeltur osv)",
        },
        {
          id: "4",
          question: "Bevegelighet",
          info: "(tøying, spagat, utstrekking osv)",
        },
        {
          id: "5",
          question: "Balanse",
          info:
            "(gå på bom/line, stå på en fot, bygge store tårn, stå på tærne osv)",
        },
      ],
     
    };
  },
  methods: {
    changeComponent(){
                this.$emit("nextComponent","QuestionYesNo");
            },
    result() {
      this.$router.push({ path: "/quiz/results" });
    },
    nextQuestions(){
      console.log("NEXT!");
      this.minQuestions + 4;
      this.maxQuestions + 4;
      this.quizList = this.quizItems.slice(this.minQuestions,this.maxQuestions);
    
    },
    previousQuestions(){
      if(this.maxQuestions > 3){
        this.maxQuestions - 4;
        this.minQuestions -4;
        this.quizList= this.quizItems.slice(this.minQuestions,this.maxQuestions);
      }
    },
    computed: {
      filterRange (){
        return this.quizList = this.quizItems.slice(this.minQuestions,this.maxQuestions);
      }
    }
  },
};
</script>

<style scoped>
.quiz {
  margin-left: auto;
   margin-right: auto;
   margin-top: 20px;
}

#questions {
  padding-bottom: 20px;
  padding-top: 10px;
  margin-left: auto;
   margin-right: auto;
 }

 input[type="radio"]:hover, label:hover{
   background-color: #548687;
   color: #ffff;
 }

 #inputRadio {
   margin: 0 auto;
   width: auto;
   text-align: left;
   display: table;
   line-height: 35px;
   font-size: 20px;
}

#btn-navigation {
  background-color: #424242;
  color: #ffffff;
  font-size: 30px;
}

#btn-navigation:hover {
   background-color: #548687;
 }
</style>
