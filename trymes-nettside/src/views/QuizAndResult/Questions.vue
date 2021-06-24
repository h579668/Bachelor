<template>
  <div class="quiz">
    <div>
      <h1></h1>
    </div>
    <!-- role="main" means that it is the main content on the page-->
    <div role="main">
      <form>
        <fieldset>
          <legend v-show="number <= questionCategory.length">
            {{ information }}
          </legend>
          <legend v-show="number == questionCategory.length + 1">
            {{ resultInfo }}
          </legend>
          <!--v-for-loop to get all the quiestions from the quiz table
        the table is not yet created in the database, but it should be in the future-->

          <div
            v-for="cat in questionCategory"
            :key="cat.questions_category_id"
            v-show="cat.questions_category_id == number"
          >
            <h1>{{ cat.title }}</h1>
            <div
              id="questions"
              v-for="item in cat.questions"
              :key="item.questions_id"
            >
              <h2>{{ item.feature }}</h2>
              <p>{{ item.description }}</p>

              <!-- three alternatives for the user to answer -->
              <form
                id="inputRadio"
                name="inputFields"
                v-show="cat.questions_category_id < 2"
              >
                <input
                  type="radio"
                  :id="item.questions_id + 'a'"
                  :name="item.questions_id"
                  :value="3"
                  v-model="features[item.questions_id - 1]"
                />
                <label :for="item.questions_id + 'a'">
                  Synes det er kjempegøy
                </label>
                <br />

                <input
                  type="radio"
                  :id="item.questions_id + 'b'"
                  :name="item.questions_id"
                  :value="2"
                  v-model="features[item.questions_id - 1]"
                />
                <label :for="item.questions_id + 'b'"> Helt greit </label><br />

                <input
                  type="radio"
                  :id="item.questions_id + 'c'"
                  :name="item.questions_id"
                  :value="1"
                  v-model="features[item.questions_id - 1]"
                />
                <label :for="item.questions_id + 'c'">
                  Liker ikke i det hele tatt
                </label>
              </form>

              <!-- yes and no questions-->
              <form
                id="inputRadio"
                name="inputFields"
                v-show="cat.questions_category_id > 1"
              >
                <input
                  type="radio"
                  :id="item.questions_id + 'd'"
                  :name="item.questions_id"
                  :value="1"
                  v-model="features[item.questions_id - 1]"
                />
                <label :for="item.questions_id + 'd'"> Ja</label> <br />

                <input
                  type="radio"
                  :id="item.questions_id + 'e'"
                  :name="item.questions_id"
                  :value="0"
                  v-model="features[item.questions_id - 1]"
                />
                <label :for="item.questions_id + 'e'"> Nei </label><br />
              </form>
            </div>
          </div>
          <div>
            <button
              @click="previousQuestions"
              class="btn-navigation"
              v-show="number > 1 && number < questionCategory.length + 1"
            >
              Forrige
            </button>

            <button
              @click="nextQuestions"
              class="btn-navigation"
              v-show="number < questionCategory.length"
            >
              Neste
            </button>
            <button
              @click="saveUsersInput"
              class="btn-navigation"
              v-show="number == questionCategory.length"
            >
              Ferdig
            </button>
            <button
              @click="calculateTheScore"
              class="btn-navigation"
              v-show="number == questionCategory.length + 1"
            >
              Hent resultater
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import QuestionDataService from "@/services/QuestionDataService.js";
import QuestionCategoryDataService from "@/services/QuestionCategoryDataService.js";
import UserFeatureDataService from "@/services/UserFeatureDataService.js";
import UserActivityDataService from "@/services/UserActivityDataService.js";

export default {
  name: "QuestionPage",

  data() {
    return {
      information: "Kartlegging av hvordan du liker å drive med aktiviteter",
      resultInfo: "Klikk for å gå videre til resultater",
      yesNoTitle: "Nå har vi noen ja/nei spørsmål",
      questions: [],
      feature: "",
      description: "",

      questionCategory: [],
      title: "",

      features: [],
      number: 1,

      user: null,
    };
  },
  methods: {
    nextQuestions() {
      if (this.number < this.questionCategory.length + 1) {
        this.number++;
      }
    },
    previousQuestions() {
      if (this.number > 1) {
        this.number--;
      }
    },
    saveUsersInput() {
      let input = {
        users_id: this.user,
        features: this.features,
      };
      console.log("DETTE HER " + input.users_id);
      UserFeatureDataService.addFeature(input)
        .then((response) => {
          //this.user.users_id = response.data.users_id;
          console.log(response.data);
          this.nextQuestions();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    calculateTheScore() {
      //console.log("HERE IN CALCULATE FRONT END " );
      let user_data = {
        users_id: this.user,
      };
      console.log(user_data.users_id);
      UserActivityDataService.addActivity(user_data)
        .then((response) => {
          console.log(response.data);
          this.result();
        })
        .catch((e) => {
          console.log(e);
        });
      console.log("HERE IN CALCULATE FRONT END NUMBER 3");
      console.log(user_data.users_id);
    },
    checkSession() {
      if (!this.$session.exists()) {
        this.$router.push("/");
      } else if (this.$session.get("user")) {
        this.user = this.$session.get("user");
        console.log("I SESSION " + this.user);
      }
    },
    result() {
      this.$router.push({ path: "/questions/results" });
    },
    RegisterUser() {
      this.$router.push({ path: "/register" });
    },
    retrieveQuestions() {
      QuestionDataService.getAll()
        .then((response) => {
          this.questions = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrieveQuestionCategory() {
      QuestionCategoryDataService.getAll()
        .then((response) => {
          this.questionCategory = response.data;
          console.log(response.data);
        })
        .catch((e) => {
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
  },
  created: function () {
    this.checkSession();
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

input[type="radio"]:hover,
label:hover {
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

fieldset {
  border-color: #ffff;
  border-style: solid;
  overflow-y: scroll;
  max-height: 550px;
}
</style>
