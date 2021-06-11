<template>
    <div>

      <div id="app">
      <!-- el-tabs start-->
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">

        <!-- tabCreate start -->
        <el-tab-pane label="Opprett nytt Forbund" id="tab-0" name="tabCreate"> 
         <!--  Create new Association  -->
        <form>

        <template>
        <br />
        <fieldset>
            <legend> 
                <b>Opprett et nytt forbund</b> 
            </legend>
            
            <label for="text"> Navn på forbund</label> <br />
            <input type="text" placeholder="Navn" v-model="name"/>
            <br />

             <el-button type="success" size="small"  @click="newAssociation" >
                Legg til Forbund
            </el-button>
        </fieldset>
        </template>
       </form>
        </el-tab-pane>
        <!-- tabCreate end -->

        <!-- tabActivities start -->
        <el-tab-pane label="Finn Aktiviteter under Forbund" id="tab-1" name="tabActivities">  
          <!-- Look at the activities connected with an association -->
    <form>
       
        <template>

        <fieldset>
          <legend>
            <b>
            Finn aktiviteter som er registrert til et forbund:
            </b>
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

        
      <template>  
        <p>
            Forbundets registrerte aktiviteter:
          </p>
<!--Table with registerd activities connected with the association-->
      
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
         Table with the registered areas connected with the association 
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
        </el-tab-pane>


 
        <el-tab-pane label="Legg Aktiviteter til i Forbund" id="tab-2" name="tabAdd"> 
            <!--Add more activities to the association  -->
    <template>
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
        </el-tab-pane>

        <el-tab-pane label="Endre/slette Forbund" id="tab-3" name="tabEdit"> 
        <!-- Update or delete an association -->
    <template>
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
    </template>
    </el-tab-pane>

      </el-tabs>

   <!-- navButtons
    <el-button type="primary" plain @click="openCreateFields" >
            Opprett et nytt forbund
    </el-button>
     <el-button type="primary" plain @click="openLookFields" >
           Finn forbund med aktiviteter
    </el-button>
     <el-button type="primary" plain @click="openAddFields" >
            Legg aktiviteter til forbund
    </el-button>
     <el-button type="primary" plain @click="openEditFields" >
            Endre eller slette forbund
    </el-button>-->

  
 
    
   
  

    </div>
</template>

<script>
import AssociationDataService from "@/services/AssociationDataService.js";
import ActivityDataService from "@/services/ActivityDataService.js";
//import NavButtons from "@/components/NavButtons.vue";
//import EditAssociation from "@/components/EditAssociation.vue";
//import EditAssociationsActivities from "@/components/EditAssociationsActivities.vue"

export default {
    name: "Assocation",

    data(){
        return{
            associations_activities: "",
            showActivities: false,
            newAsso: false,
            name: "",
            editName:"",
            
            activities: {
                activities_id: "",
                activities_name:"",
            },

            areas: [
                {
                 country: "",
                 county: "",
                  municipality: "",
             },
            ],
      
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
                            title: 'Forbund er endret!',
                            message: this.editName + ". Refresh siden for å se endring!",
                            type: 'success'
                        });
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
        handleClick(tab) {
          this.activeName = tab.name;

          console.log(tab.name);
      },
       /* openCreateFields(){
            this.createFieldsOpen= true;
            this.lookFieldsOpen = false;
            this.editFieldsOpen = false;
            this.addFieldsOpen = false;

        },
        openLookFields(){
            this.createFieldsOpen= false;
            this.lookFieldsOpen= true;
            this.editFieldsOpen= false;
            this.addFieldsOpen= false;
        },
         openEditFields(){
            this.createFieldsOpen = false;
            this.lookFieldsOpen = false;
            this.editFieldsOpen = true;
            this.addFieldsOpen = false;

         },
         openAddFields(){
            this.createFieldsOpen= false;
            this.lookFieldsOpen= false;
            this.editFieldsOpen = false;
            this.addFieldsOpen= true;
         },*/
        newAssociation(){
            if(this.name.length != 0 ){
                let data = {
                    associations_name: this.name
                }
            
            AssociationDataService.create(data)
            .then((response) => {
            
                this.$notify({
                    title: 'Forbund er lagt til',
                    message: data.associations_name,
                    type: 'success'
                });
      
                console.log(response.data);
            })
            .catch((e) => {
                  console.log(e);
                });
            }else{
                this.$notify({
                    title: 'Forbund er IKKE lagt til',
                    message: 'Vennligst skriv inn navn',
                    type: 'warning'
                });
            }
        },
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
  
  
  