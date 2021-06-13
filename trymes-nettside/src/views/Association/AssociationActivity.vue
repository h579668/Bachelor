<template>
    <div>
      <el-container>
        <el-aside style="width:70px">
      <AdminNav />
        </el-aside>
        <el-main>
    <!--  Look at the activities connected with an association -->
    <form>

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
            <b>{{ name }} </b> registrerte aktiviteter:
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
         
      </fieldset>
    </form>
        </el-main>
      </el-container>
    </div>
</template>

<script>

import AssociationDataService from "@/services/AssociationDataService.js";
import ActivityDataService from "@/services/ActivityDataService.js";
import AdminNav from "@/components/AdminNav";

export default {
    name: "EditAssociation",
    components:{
        AdminNav
    },
    data(){
        return{
          name:"",
          showActivities:false,
            
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
        findActivities(){
            let id = this.associations.associations_id

            AssociationDataService.findOne(id)
                .then((response) => {
                    this.name= response.data.associations_name;
                    this.associations_activities = response.data;
                     this.showActivities = true;
                    console.log(response.data);
                    this.refreshList()
                })
                .catch((e) => {
                     console.log(e);
                });
            },
            deleteAssociation(){
            let id = this.associations.associations_id;
                
            AssociationDataService.delete(id)
                .then((response) =>{
                    this.$notify({
                        title: 'Forbund er slettet!',
                        message: this.editName + ". Refresh siden for å se endring!",
                        type: 'success'
                    });
                    console.log(response.data);
                }).catch((e) => {
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
<style scoped>
form {
  padding-bottom: 30px;
  line-height: 35px;
  font-size: 20px;
}
table{
  margin: 0 auto;
  width: auto;
  line-height: 35px;
  font-size: 20px;
  list-style-type: none;
}

th, td {
  padding-right: 35px;
  text-align: left;
}
  
  </style>