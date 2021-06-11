<template>
    <div>
           
    <!--  Look at the activities connected with an association -->
    <form>
       
        <template v-if="lookFieldsOpen">

        <fieldset>
          <legend>
            <b>
            Finn aktiviteter som er registrert til et forbund:
            <b>
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

           <el-button size="small" type="success" @click="findActivities"  iicon="el-icon-search"> 
               Finn tilhørende aktiviteter  
            </el-button>

        
      <template v-if="showActivities">  
        <p>
            Forbundets registrerte aktiviteter:
          </p>
      <template v-if="showActivities">  
        <p>
            Forbundets registrerte aktiviteter:
          </p>
<!-- Table with registerd activities connected with the association-->
      
        <table>
            <thead> 
              <tr>
                <th>Aktivitetsnavn<th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="act in associations_activities.activities" :key="act.activities_id">
                <td>
                  {{ act.activities_name }}
                </td>
              </tr>

            </tbody>
          </table>
          <br/>
          <!-- Table with the registered areas connected with the association -->
         <table>
            <thead> 
              <tr>
                <th> Land </th>
                <th> Fylke </th>
                <th> Kommune </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="area in associations_activities.areas" :key="area.areas_id">
                <td>
                  {{ area.country }}
                </td>
                <td>
                  {{ area.county }}
                </td>
                <td>
                  {{ area.municipality }}
                </td>
              </tr>

            </tbody>
          </table>         
         
         </template>

      </fieldset>
    </form>

    <!-- Add more activities to the association  -->
    <template v-if="addFieldsOpen">
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

import AssociationDataService from "@/services/AssociationDataService.js";
import ActivityDataService from "@/services/ActivityDataService.js";

export default {
    name:"EditAssociationsActivities",
   
    methods:{
        findActivities(){
            console.log("HEEEEY")
            let id = this.associations.associations_id

      
            AssociationDataService.findOne(id)
                .then((response) => {
                    this.associations_activities = response.data;
                     this.showActivities = true;
                    console.log(response.data);
                })
                .catch((e) => {
                     console.log(e);
                });
            },

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