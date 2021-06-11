<template>
    <div>
      <div id="app">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="Aktivitet" id="tab-0" name="tabActivity"> 
         
        </el-tab-pane>
        <el-tab-pane label="Forbund" id="tab-1" name="tabAssociation">  
          <Association />
        </el-tab-pane>
        <el-tab-pane label="Område" id="tab-2" name="tabArea"> </el-tab-pane>
      </el-tabs>
    </div>
    </div>
</template>

<script>
import AssociationDataService from "@/services/AssociationDataService.js";
//import AreaDataService from "@/services/AreaDataService.js";
//import AgeDataService from "@/services/AgeDataService.js";
//import ActivityDataService from "@/services/ActivityDataService.js";
//import TableData from "@/components/Table.vue";
import Association from "@/components/Association.vue";

export default {
  name: "AddToActivity",
  components:{
   // TableData,
     Association,
  },

  data() {
    return {
      activeName: 'tabActivity',

    };
  },
  methods: {
    /* checkSession() { 
          if(!this.$session.exists()){
              this.$router.push('/');
          }else if(this.$session.get("activity")){
              this.activity_id = this.$session.get("activity")
              console.log("I SESSION " + this.activity_id);
          }
        },*/

  
    
    
    handleClick(tab, event) {
        console.log(tab, event);
      },

    /*retrieveAreas() {
      AreaDataService.getAll()
        .then((response) => {
          this.areas = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    retrieveAges() {
      AgeDataService.getAll()
        .then((response) => {
          this.age_intervals = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveAreas();
    this.retrieveAges();
   // this.retrieveAssociations();*/
  },

  /* created: function(){
        this.checkSession();
      }*/
      
};
</script>

<style scoped>
form {
  padding-bottom: 30px;
  line-height: 35px;
  font-size: 20px;
}

input[type="text"]{
  align-content: left;
}




</style>