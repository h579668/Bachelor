<template>
    <div>
            
        <!-- Create new Association -->
        <form>

        <template v-if="createFieldsOpen">
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
        
     <!--  Update or delete an association -->
    <template v-if="editFieldsOpen">
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

    </div>
</template>


<script>

import AssociationDataService from "@/services/AssociationDataService.js";

export default {
    name:"EditAssociation",
    props: [createFieldsOpen,
            lookFieldsOpen,
            editFieldsOpen,
            addFieldsOpen],


    methods:{
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
            
    
}}
</script>