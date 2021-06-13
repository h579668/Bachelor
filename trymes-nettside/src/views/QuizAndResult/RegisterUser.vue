<template>
  <div>
    <h1> {{ register }} </h1>
    <p> {{ information }} </p>
    
    <div>
        <!-- select geographical location-->
     <label for="area"> <b>{{ area_title }}</b> </label> <br />
      <select
      id="area"
      name="area"
        class="form-control"
        v-model="user.areas_id"
        :required="true"
       >
        <option disabled value="">{{ select_an_area }}</option>
        <option v-for="a in area" :value="a.areas_id" :key="a.areas_id" :id="a.areas_id">
          {{ a.county }}
        </option>
      </select>
      <br />
      <!--<div id="spanelement">
        <span> Valgt område: {{ user.areas_id }} </span>
      </div>-->
    </div>
    <br />
    <br />
    <!-- select an age_interval -->
    <div>
      <label for="age"><b> {{ age_title }}</b></label> <br />
      <select
      id="age"
      name="age"
        class="form-control"
        v-model="user.age_id"
        :required="true"
        >
        <option disabled value="">{{ select_an_age }}</option>
        <option v-for="age in age_intervals" :value="age.age_id" :key="age.age_id" :id="age.age_id">
          {{ age.age_values }}
        </option>
      </select>
      <br />
      <!--<div id="spanelement">
        <span> Valgt alder: {{ user.age_id }} </span>
      </div>-->
    </div>
    <button id="nextbtn" @click="saveUser"> {{ next }} </button>
  </div>
</template>

<script>
import AgeDataService from "@/services/AgeDataService.js";
import AreaDataService from "@/services/AreaDataService.js";
import UserDataService from "@/services/UserDataService.js";

export default {
  name: "RegisterUser",
  data() {
    return {
      register: "Legg inn område og alder",
      information: "Det er valgfritt å legge inn alder og område, men kan bidra til å forbedre tilbud der du bor",
      age_title: "Velg alder",
      area_title: "Velg område",
      //areas_id:"",

      //Area information that user can select
      area: [
       /* { id: 1, place: "Vestland" },
        { id: 2, place: "Oslo" },*/
      ],
      county: "",
      //Default values
      select_an_area: "Velg område",
      select_an_age: "Velg alder",
      select_age: "",
      select_area: "",
      
      //Age intervals table
      age_intervals: [],
      age_values:"",
      //age_id:"",

      //user information 
      user: {
         users_id: null,
         age_id: "", 
         areas_id: ""
      },

      //Button
      next:"Start testen!",
      
    };
  },
  methods: {
    //Redirecting the user to questions page
    quizpage(){
      this.$router.push({ path: "/questions" });
    },
    //saving the user in the database
    saveUser(){
      var data = {
         areas_id: this.user.areas_id,
         age_id: this.user.age_id
      }
      UserDataService.create(data)
      .then(response => {
        this.user.users_id = response.data.users_id;
        console.log("USER ID HERE " +this.user.users_id);
        //this.$store.dispatch('registered', { newUser })
        if(this.$session.exists()){
          this.$session.destroy();
        }
        this.$session.start();
        this.$session.set("user", this.user.users_id)
        this.quizpage();
      })
       .catch(e => {
          console.log(e);
        });
     // this.quizpage();
    },

    
    //Getting all the areas from database
      retrieveAreas() {
        AreaDataService.getAll()
            .then(response => {
            this.area = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      retrieveAges() {
        AgeDataService.getAll()
            .then(response => {
            this.age_intervals = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      //Updating the list
      refreshList() {
        this.retrieveAreas();
        this.retrieveAges();
      
      },
    },
    //Put it on the page
    mounted() {
      this.retrieveAreas();
      this.retrieveAges();
    } 
};
</script>

<style scoped>
#spanelement {
  margin-top: 3%;
  font-size:20px;
}

select {
 
  padding: 1%;
  width: 22%;
  font-size: 17px;
  cursor: pointer;
}

option {
  line-height: 10%;
  font-display: 10%;
}
#nextbtn {
  margin-top: 5%;
  background-color: #424242;
  color: #ffffff;
  font-size: 23px;
  cursor: pointer;
}

#nextbtn:hover {
   background-color: #548687;
 }

 label{
   font-size: 20px;

 }
</style>