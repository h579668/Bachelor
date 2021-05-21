<template>
  <div>
    <h1> {{ register }} </h1>
    <div>
        <!-- select geographical location-->
      <select
        class="form-control"
        v-model="select_area"
        :required="true"
        @change="changeLocation">
        <option disabled :value="select_area">{{ select_area }}</option>
        <option v-for="a in area" :value="a.place" :key="a.id">
          {{ a.place }}
        </option>
      </select>
      <br />
      <div id="spanelement">
        <span> Valgt område: {{ select_area }} </span>
      </div>
    </div>
    <!-- select an age_interval -->
    <div>
      <select
        class="form-control"
        v-model="select_age"
        :required="true"
        @change="changeAge">
        <option disabled value="">{{ select_an_age }}</option>
        <option v-for="(age,index) in age_intervals" :value="age.age_values" :key="index">
          {{ age.age_values }}
        </option>
      </select>
      <br />
      <div id="spanelement">
        <span> Valgt alder: {{ select_age }} </span>
      </div>
    </div>
    <button id="nextbtn" @click="quizpage"> {{ next }} </button>
  </div>
</template>

<script>
import AgeDataService from "@/services/AgeDataService.js"

export default {
  name: "RegisterUser",
  props: {
    register: String,
  },
  data() {
    return {
      //Area information that user can select
      area: [
        { id: 1, place: "Vestland" },
        { id: 2, place: "Oslo" },
      ],
      //Default values
      select_area: "Velg område",
      select_an_age: "Velg alder",
      select_age:"",
      
      //Age intervals table
      age_intervals: [],
      age_values:"",
      //Button
      next:"Start testen!",
      
    };
  },
  methods: {
    //Redirecting the user to questions page
    quizpage(){
      this.$router.push({ path: "/questions" });
    },
    //Getting all the age_intervals from database
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
        this.retrieveAges();
      
      },
    },
    //Put it on the page
    mounted() {
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
  margin-top: 5%;
  padding: 1%;
  width: 22%;
  font-size: 17px;
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
}

#nextbtn:hover {
   background-color: #548687;
 }
</style>