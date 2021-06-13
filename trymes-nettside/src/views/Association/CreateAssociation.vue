<template>
    <div>
        <el-container>
            <el-aside width ="70px">
                <AdminNav />
            </el-aside>
            <el-main>
             <form>
                <br />
                <fieldset>
                    <legend> 
                        <b>Opprett et nytt forbund</b> 
                    </legend>
                    <br />
                    <label for="text"> Navn på forbund</label> <br /> <br />
                    <input type="text" placeholder="Navn" v-model="name"/>
                    <br />

                     <el-button type="success" size="small"  @click="newAssociation" >
                         Legg til Forbund
                    </el-button>

                    </fieldset>
                </form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AssociationDataService from "@/services/AssociationDataService.js";
import AdminNav from "@/components/AdminNav"
export default {
    name: "CreateAssociation",
    components:{
        AdminNav
    },

    data(){
        return{
            name: "",
        }
    },

    methods: {
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
    }           

}
</script>

