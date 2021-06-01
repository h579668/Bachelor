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
            
              <input type="radio" :id="item.questions_id + 'a'" :name="item.questions_id" :value="3" />
              <label :for="item.questions_id + 'a'"> Synes det er kjempegøy </label> <br />

              <input type="radio" :id="item.questions_id + 'b'" :name="item.questions_id" :value="2"  />
              <label :for="item.questions_id + 'b'"> Helt greit </label><br />

              <input type="radio" :id="item.questions_id + 'c'" :name="item.questions_id" :value="1"  />
              <label :for="item.questions_id + 'c'"> Liker ikke i det hele tatt </label>

            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div>
      <!-- disabled button because it is only one page at the moment-->
      <button @click="RegisterUser" class="btn-navigation" >
        Gå tilbake
      </button>
      <!--<button @click="nextQuestions" id="btn-navigation" class="btn-navigation navigation-purple">
        Neste
      </button>-->
     <button @click="result" class="btn-navigation" >
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
import UserDataService from "@/services/UserDataService.js"

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
     
    };
  },
  methods: {
    /*radioButtons(){
      let inputs = inputFields.elements;
      let radios =[];
      let result={ features_id: "", users_features_values: ""};

      //Loop and find only the Radios
    for (let i = 0; i < inputs.length; ++i) {
        if (inputs[i].type == 'radio') {
            radios.push(inputs[i]);
        }
    }

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            result[i].users_features_values= radios[i].value;
            if((radios[i].id).contains("[a-zA-Z]"))
                radios[i].id.slice(0,radios[i].length-1);
            result[i].features_id = radios[i].id;
        }
    }
    },*/
    saveUserWithInput(){
      let newUser = {
        age_id: this.select_age,
        area_id: this.select_area,
      };
      UserDataService.create(newUser)
      .then(response => {
        this.user.users_id = response.newUser.users_id;
        console.log(response.data)
      })
       .catch(e => {
          console.log(e);
        });
     
    },
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
  cursor: pointer;
}


#inputRadio {
  margin: 0 auto;
  width: auto;
  text-align: left;
  display: table;
  line-height: 35px;
  font-size: 20px;
}

.btn-navigation {
  background-color: #424242;
  color: #ffffff;
  font-size: 30px;
}

.btn-navigation:hover {
  background-color: #548687;
  cursor: pointer;
}

fieldset{
  border-color: #ffff;
  border-style: solid;
}
</style>
