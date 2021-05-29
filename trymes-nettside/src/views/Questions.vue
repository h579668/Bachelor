<template>
  <div class="quiz">
    <div>
      <h1></h1>
    </div>
    <!-- role="main" means that it is the main content on the page-->
    <div role="main"> 
    <fieldset>
    <legend> {{ information }}</legend>
    <!--v-for-loop to get all the quiestions from the quiz table
      the table is not yet created in the database, but it should be in the future-->
    <div v-for="cat in questionCategory" :key="cat.questions_category_id">
      <h1>{{ cat.title }}</h1>
      <div id="questions" v-for="item in cat.questions" :key="item.questions_id">
        <h2>{{ item.feature}}</h2>
        <p>{{ item.description }}</p>
        <div id="inputRadio">
          
          <input type="radio" :id="item.id + 'a'" :name="item.id" :value="item.id + 'a'" />
          <label :for="item.id + 'a'"> Synes det er kjempegøy </label> <br />

          <input type="radio" :id="item.id + 'b'" :name="item.id" :value="item.id + 'b'"  />
          <label :for="item.id + 'b'"> Helt greit </label><br />

          <input type="radio" :id="item.id + 'c'" :name="item.id" :value="item.id + 'c'"  />
          <label :for="item.id + 'c'"> Liker ikke i det hele tatt </label>
          
        </div>
      </div>
    </div>

    </fieldset>
    </div>

    <div>
      <!-- disabled button because it is only one page at the moment-->
      <button @click="RegisterUser" id="btn-navigation" class="btn-navigation navigation-purple">
        Gå tilbake
      </button>
      <!--<button @click="nextQuestions" id="btn-navigation" class="btn-navigation navigation-purple">
        Neste
      </button>-->
     <button @click="result" id="btn-navigation" class="btn-navigation navigation-purple">
        Gå til resultater
      </button>

      <!--<el-button-group>
        <el-button class="btn-navigation" icon="el-icon-arrow-left" @click="RegisterUser">Previous Page</el-button>
        <el-button class="btn-navigation" icon="el-icon-arrow-right el-icon-right" @click="result">Next Page</el-button>
      </el-button-group>-->
    </div>
  </div>
</template>

<script>
import QuestionDataService from "@/services/QuestionDataService.js"
import QuestionCategoryDataService from "@/services/QuestionCategoryDataService.js"

export default {
  name: "QuestionPage",
  data() {
    return {
      information: "Kartlegging av hvordan du liker å drive med aktiviteter",
      yesNoTitle: "Nå har vi noen ja/nei spørsmål",
      questions:[],
      feature:"",
      description:"",

      questionCategory: [],
      title: "",

      /*quizItems: [
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
      ],*/
     
    };
  },
  methods: {
    result() {
      this.$router.push({ path: "/questions/results" });
    },
    RegisterUser() {
      this.$router.push({ path: "/register" });  
    },
    retrieveQuestions() {
        QuestionDataService.getAll()
            .then(response => {
            this.questions = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
    },
    retrieveQuestionCategory() {
      QuestionCategoryDataService.getAll()
            .then(response => {
            this.questionCategory = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
    },
    
    refreshList() {
      this.retrieveQuestions();
      this.retrieveQuestionCategory();
    },
  },

  mounted() {
    this.retrieveQuestions();
    this.retrieveQuestionCategory();
  } 
 
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
 fieldset{
    border-color: #ffff;
    border-style: solid;
 }
</style>
