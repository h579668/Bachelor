<template>
    <div>
        <el-container>
            <el-aside width ="205px">
                <AdminNav />
            </el-aside>
            <el-main>
             <form>
                <br />
                <fieldset>
                    <legend> 
                        <b>Opprett et nytt forbund</b> 
                    </legend>
                    <div>
                    <br />
                    <label for="text"> Navn på forbund</label> <br />
                    <input type="text" placeholder="Navn" v-model="name"/>
                    </div>

                    <!-- select geographical location-->
                    <div>
                     <label for="select"> Velg område </label> <br />
                     <select
                        id="area"
                        name="area"
                        class="form-control"
                        v-model="area.areas_id"
                        :required="true"
                    >
                    <option disabled value=''> </option>
                    <option v-for="a in area" :value="a.areas_id" :key="a.areas_id" :id="a.areas_id">
                        {{ a.country }} : {{ a.municipality }} : {{ a.county}}
                     </option>
                    </select>
                    <p>
                        Dersom ønsket område ikke eksisterer, kan det opprettes her:
                    </p>
                        <el-button class="addButton" v-show="!show" type="info" size="small"  @click="newArea" >
                         Nytt område
                        </el-button>
                        <el-button v-show="show" type="success" size="small"  @click="newArea" >
                          Gjem feltene under
                        </el-button>
                        <br />                        
                        <template v-if="show">
                            <NewArea />
                        </template>
                        
                    </div>

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
import AreaDataService from "@/services/AreaDataService.js";
import AdminNav from "@/components/AdminNav";
import NewArea from "@/views/Area/NewArea";

export default {
  name: "CreateAssociation",
  components: {
    AdminNav,
    NewArea
  },

  data() {
    return {
    show:false,
      name: "",
      area: {
        areas_id: "",
        country: "",
        municipality: "",
        county: "",
      },
      errors: [],
    };
  },
  methods: {
    newArea(){
        if(this.show){
            this.show = false;
        } else{
        this.show = true
        }
    },
    newAssociation() {
      if (this.name.length && this.area.areas_id) {
        let data = {
          associations_name: this.name,
          areas_id: this.area.areas_id,
        };
        AssociationDataService.create(data)
          .then((response) => {
            this.$notify({
              title: "Forbund er lagt til",
              message: data.associations_name,
              type: "success",
            });
            this.show = false;
            this.name = '';
            this.refreshList();

            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.$notify({
          title: "Forbund er IKKE lagt til",
          message: "Vennligst skriv inn navn, eller velg område",
          type: "warning",
        });
      }
    },
    //Getting all the areas from database
    retrieveAreas() {
      AreaDataService.getAll()
        .then((response) => {
          this.area = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //Updating the list
    refreshList() {
      this.retrieveAreas();
    },
  },
  //Put it on the page
  mounted() {
    this.retrieveAreas();
  },
};
</script>

<style scoped>
input[type="text"], select {
  padding: 6px;
  border-color: #0000;
  border: 1px solid;
  line-height: 1.8;
}
form,label {
  line-height: 1.8;
}
div {
  padding-bottom: 20px;
}
.el-button{
  background-color: #548687;
  color:  #ffff;
  border-color: #0000; 
}
.el-button:hover{
  background-color: #72b1b3;
  color:  #ffff;
  border:1px solid;
  border-color:  #548687; 
}
.addButton{
  background-color: #424242;
  color: #ffffff;
}
</style>
