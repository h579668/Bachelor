<template>
<!-- role="main" means that it is the main content on the page-->
  <div class="deleteActivity" role="main">
    <h1>{{ msg }}</h1>
    <form>
    <table class="deleteActivity-container" >
        <thead>
            <tr>
                <th colspan="2">Aktivitet informasjon</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in activities" :key="index">
            <td><input :value="item.activity" type="text"></td>
            <td><input :value="item.associations" type="text"></td>
            <!--- skal og ha ut kommentaren om aktiviteten -->
        </tr>
      </tbody>

      <thead>
            <tr>
                <th colspan="2">Kontakt informasjon</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(contactinfo, index) in contact" :key="index">
            <td><input :value="contactinfo.tlf" type="text"></td>
            <td><input :value="contactinfo.email" type="text"></td>
            <!--- skal og ha ut andre informasjoner
            <td><input type="text" :placeholder="contactinfo.tlf"></td> -->
        </tr>
        </tbody>

        <thead>
            <tr>
                <th colspan="2">Kategorier</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cat, index) in categories" :key="index">
            <td>{{ cat.id }}</td>
            <!--- skal og ha ut mer informasjon
            <td><input type="text" :placeholder="contactinfo.tlf"></td> -->
        </tr>
        </tbody>
    </table>
    <button @click="change" id="changebtn" class="changebtn deleteActivity-purple">
        Lagre endringene
      </button>
    </form>
  </div>
</template>

<script>
import ActivityDataService from "@/services/ActivityDataService.js";
export default {
  name: "ChangeActivity",
  data(){
      return { 
        activities: [
          { activity: "Cheerleading", associations: "Norges amerikanske idretters forbund"},
        ],
        contact: [
          { tlf: "986 66 494", email: "daniela.ohnstad@nif.idrett.no"},
        ],
        categories: [
          { id: "Styrke"}, 
          { id: "Spenst"}, 
          { id: "Bevegelighet"},
        ],
        msg: "Endre en aktivitet"
        /*
        activities: [],
        activities_name:"",
        */

      };
    },
    methods: {
        change() {
      window.alert("Endringene ble lagret.");
      this.$router.push({ path: "/admenu" });
    },
      retrieveLabels() {
        ActivityDataService.getAll()
            .then(response => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },
      refreshList() {
        this.retrieveLabels();
      
      },
    },
    mounted() {
      this.retrieveLabels();
    }, 
};

</script>

<style scoped>
.deleteActivity-container {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
th {
    font-size: 25px;
}
input{
    width:70%;
}
</style>