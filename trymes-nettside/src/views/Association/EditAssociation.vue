<template>
        <!-- Update or delete an association -->
   <el-container>
     <el-aside width ="70px">
           <AdminNav />
       </el-aside>
      <el-main>
    <form>
        <fieldset>
        <legend>
            <b> Endre eller slett en association </b>
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
          </select> 
        <br />
         
        <label for="text"> Endre navn på valgt forbund</label> <br />
            <input type="text" placeholder="Navn" v-model="editName"/>
           
        <br />
            <el-button size="small" type="success" @click="editAssociation"  icon="el-icon-edit"> 
                Endre valgt forbund    
            </el-button>
             <el-button size="small" type="danger" @click="deleteAssociation" icon="el-icon-delete">
                Slett valgt forbund
            </el-button>

        </fieldset>
    </form>
    </el-main>
   </el-container>
    
</template>

<!--<template>
    <div>
      <el-container>
        <el-aside style="width:70px">
      <AdminNav />
        </el-aside>
        <el-main>
    <!--  Look at the activities connected with an association 
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
<!-- Table with registerd activities connected with the association
      
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
          <!-- Table with the registered areas connected with the association 
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
</template>-->

<script>

import AssociationDataService from "@/services/AssociationDataService.js";
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
      editAssociation(){
            if(this.editName.length != 0){
                let id = this.associations.associations_id;
                let data = {
                    associations_name: this.editName
                }
                
                AssociationDataService.updateName(id,data)
                    .then((response) =>{
                        this.$notify({
                            title: +'Navnet er endret!',
                            message: '"'+ this.editName + '"' + 'er nå det nye navnet',
                            type: 'success'
                        });
                    this.refreshList();
                    console.log(response.data);
                }).catch((e) => {
                  console.log(e);
                });
            }else{
                this.$notify({
                    title: 'Forbund er IKKE endret',
                    message: 'Vennligst skriv inn nytt navn',
                    type: 'warning'
                });
            }
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
          
          
        refreshList() {
            this.retrieveAssociations();
        },
  
    },
     mounted() {
        this.retrieveAssociations();
            
    }
}
</script>
<style scoped>

  
  </style>