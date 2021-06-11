<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.2/lib/index.js"></script>
<template>
  <div class="createNewActivity">
    <h1>{{ msg }}</h1>
    <!-- role="main" means that it is the main content on the page-->

    <form class="newActivity-container" role="main">
      <fieldset>
        <legend>
          <b>{{ msg2 }}</b>
        </legend>
          <h2>Informasjon om aktivitet </h2>
         <el-row :gutter="20" >
            <el-col :span="6" ><div class="grid-content bg-purple">
             Navn på aktivitet:
            <br />
            <input type="text" v-model="activity.activities_name" /> 
            </div>
          </el-col>
          <el-col :span="6" ><div class="grid-content bg-purple">
             Email:
            <br />
            <input type="text" v-model="activity.email" /> 
            </div>
          </el-col>
           <el-col :span="6" ><div class="grid-content bg-purple">
             Telefonnummer:
            <br />
            <input type="text" v-model="activity.telephone" /> 
            </div>
          </el-col>
          <el-col :span="6" ><div class="grid-content bg-purple">
             Kommentar:
            <br />
            <input type="text" v-model="activity.activities_comments" /> 
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" v-for="cat in categories" :key="cat.categories_id" >
          <h2>{{ cat.categories_name }} </h2>
            <p v-show="cat.categories_id > 3"> 
              Legg inn enten 1 for sant eller 0 for usant.
               </p> 
            <div>
              <el-col :span="6" v-for="feat in cat.features" :key="feat.features_id" >
                <div class="grid-content bg-purple">
                  {{ feat.features_name }}
                  <br />
                  <input type="number" v-model="features_list[feat.features_id-1]" /> 
                  <!-- have to use features_id-1 in order to start on index 0 --> 
              </div>
            </el-col>
           </div> 
                
        </el-row>

        <button @click="saveActivity">
          Lagre Aktivitet
        </button>

        <button @click="nextPage" v-show="saved">
          neste side
          <button>

      </fieldset>
    </form>

  </div>
</template> 

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
import ActivityDataService from "@/services/ActivityDataService.js";

export default {
    
  name: "CreateNewActivity",
  data() {
        return { 
          categories: [{
            categoreis_id:null,
            categories_name: "",
          }],

          saved:false,
          
          features:[{
            features_id: null,
            features_name: "",
          }],
          
           msg: "Legg til ny aktivitet",
           msg2: "Ny aktivitet",
           buttonMsg: "Legg til aktivitet",

           features_list:[],

           activity:{
            activities_id:null,
            activities_name: "",
            telephone: "",
            email: "",
	          activities_comments:"",

           }
        };
    },

    methods: {
      retrieveCategory() {
        CategoryDataService.getAll()
            .then(response => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch(e => {
          console.log(e);
        });
      },

      refreshList() {
        this.retrieveCategory();
      },
      nextPage(){
        this.$router.push({  name: "AddToActivity", component: '@/views/AddToActivity.vue'}).catch(() => true);
      },

      saveActivity(){
        let data = {
          activities_name: this.activity.activities_name,
          telephone: this.activity.telephone,
          email: this.activity.email,
          activities_comments: this.activity.activities_name,
          features: this.features_list
      }
      console.log(data.features.length);
      console.log(this.features_list);

      ActivityDataService.create(data)
      .then(response => {
        this.activity.activities_id = response.data.activities_id;
        console.log("ACTIVITY ID HERE " +this.activity.activities_id);
        this.session();
        this.saved = true;

      })
       .catch(e => {
          console.log(e);
        });

      },
      session(){
         if(this.$session.exists()){
            this.$session.start();
            this.$session.set("activity", this.activity.activities_id);      
        }

      },
    },
    mounted() {
      this.retrieveCategory();

    } 
};
</script>

<style scoped>


@import url("//unpkg.com/element-ui@2.15.2/lib/theme-chalk/index.css");
.el-row {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
fieldset{
  overflow-y: scroll; 
  height:550px;

}

</style>