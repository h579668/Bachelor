<!--NOT IN  CURRENTLY USE


--> 
<template>
    <div>
        <!-- Add more activities to the association  -->
      <el-header>
            <AdminNav />
      </el-header>
    <template >
      <form>
          <fieldset>
              <legend> 
                  <b>Legg forbund til aktivitet</b>
              </legend>
            
            <label for="select"> Velg Forbund </label> <br />
            <select
             class="form-control"
              v-model="associations.associations_id"
              :required="true">
            <option disabled value=""> Velg forbund</option>
            <option v-for="association in associations" :value="association.associations_id" :key="association.associations_id" :id="association.associations_id">
              {{ association.associations_name }}
            </option>
          </select> <br />
            
            
            <label for="select"> Velg Aktivitet</label> <br />
            <select
             class="form-control"
              v-model="activities.activities_id"
              :required="true">
            <option disabled value=""> Velg Aktivitet</option>
            <option v-for="activity in activities" :value="activity.activities_id" :key="activity.activities_id" :id="activity.activities_id">
              {{ activity.activities_name }}
            </option>
          </select> <br /> 

          </fieldset>
    
      </form>
    </template>
    </div>
</template>

<script>
import ActivityDataService from "@/services/ActivityDataService.js";
import AssociationDataService from "@/services/AssociationDataService.js";
import AdminNav from "@/components/AdminNav";

    export default {
      name: "AddAssociation",
      components:{
        AdminNav
    },
        data(){
            return{

                activities: {
                    activities_id: "",
                    activities_name:"",
                 },  

                 associations:{
                    associations_id: "",
                    associations_name: "",
                },
            }
           
        },
        methods:{
              retrieveAssociations() {
            AssociationDataService.getAll()
                 .then((response) => {
                    this.associations = response.data;
                    console.log(response.data);
                 })
                .catch((e) => {
                    console.log(e);
                 });
            },
            retrieveActivities() {
            ActivityDataService.getAll()
                 .then((response) => {
                    this.activities = response.data;
                    console.log(response.data);
                 })
                .catch((e) => {
                    console.log(e);
                 });
            },
        refreshList() {
            this.retrieveAssociations();
            this.retrieveActivities();
        },
  
    },
     mounted() {
        this.retrieveAssociations();
        this.retrieveActivities();
  
     
        }
        
    }
</script>

