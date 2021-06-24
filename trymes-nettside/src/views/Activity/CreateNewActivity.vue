<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.2/lib/index.js"></script>
<template>
  <el-container>
     <el-aside style="width:205px">
      <AdminNav />
        </el-aside>
    <el-main>
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
            <input type="text" placeholder="Navn"  v-model="activity.activities_name" /> 
            </div>
          </el-col>
          <el-col :span="6" ><div class="grid-content bg-purple">
             Email:
            <br />
           
          <input type="email" placeholder="Mail Addresse" v-model="activity.email" /> 
            </div>
          </el-col>
           <el-col :span="6" ><div class="grid-content bg-purple">
             Telefonnummer:
            <br />
           <input type="text" placeholder="Telefonnummer" v-model="activity.telephone" /> 
            </div>
          </el-col>
          <el-col :span="6" ><div class="grid-content bg-purple">
             Kommentar:
            <br />
            <input type="text" placeholder="Kommentar" v-model="activity.activities_comments" /> 
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" v-for="cat in categories" :key="cat.categories_id" >
          <h2>{{ cat.categories_name }} </h2>
            <p v-show="cat.categories_id < 4"> Tast inn ett tall: 1, 2 eller 3 </p>
            <p v-show="cat.categories_id > 3"> 
              Legg inn enten 1 for ja eller 0 for nei.
               </p> 
            <div>
              <el-col :span="6" v-for="feat in cat.features" :key="feat.features_id" >
                <div class="grid-content bg-purple">
                  {{ feat.features_name }}
                  <br />

                  <el-input-number v-if="cat.categories_id < 4"  v-model="features_list[feat.features_id-1]" :min="0" :max="3"></el-input-number>
                  <el-input-number v-else v-model="features_list[feat.features_id-1]" :min="0" :max="1"></el-input-number>
                 <!-- <input type="number" v-model="features_list[feat.features_id-1]" /> -->
                  <!-- have to use features_id-1 in order to start on index 0 --> 
              </div>
            </el-col>
           </div> 
        </el-row>

       
        <label for="select"> <b>Velg Forbund </b> </label> <br />
          <select
             class="form-control"
              v-model="associations.associations_id"
              :required="true">
            <option disabled value=""> Velg forbund</option>
            <option v-for="association in associations" :value="association.associations_id" :key="association.associations_id" :id="association.associations_id">
              {{ association.associations_name }}
            </option>
          </select> <br />
        
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
           </ul>
         </p>
         <br />

        <el-button v-show="!storeActivity" type="plain" size="medium" @click="checkForm">Valider skjemaet</el-button>
        <el-button v-show="storeActivity" type="success" size="medium" @click="saveActivity">Lagre Aktivitet</el-button>
        
      </fieldset>
    </form>
    </div>
    </el-main>
  </el-container>
</template> 

<script>
import CategoryDataService from "@/services/CategoryDataService.js";
import ActivityDataService from "@/services/ActivityDataService.js";
import AssociationDataService from "@/services/AssociationDataService.js";
import AdminNav from "@/components/AdminNav";

export default {
  name: "CreateNewActivity",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [
        {
          categoreis_id: null,
          categories_name: "",
        },
      ],

      features: [
        {
          features_id: null,
          features_name: "",
        },
      ],
      errors: [],
      msg: "Legg til ny aktivitet",
      msg2: "Ny aktivitet",
      buttonMsg: "Legg til aktivitet",

      features_list: [],

      activity: {
        activities_id: null,
        activities_name: "",
        telephone: "",
        email: "",
        activities_comments: "",
      },
      associations: {
        associations_id: "",
        associations_name: "",
      },
      storeActivity: false,
    };
  },
  methods: {
    checkForm() {
      this.errors = [];

      if (!this.activity.activities_name) {
        this.errors.push("Navn på aktivitet mangler");
      }
      if (!this.activity.email) {
        this.errors.push("Email mangler/ugyldig");
      }
      if (
        this.activity.telephone &&
        this.activity.telephone.length < 8 &&
        Number.isInteger(this.activity.telephone)
      ) {
        this.errors.push("Telefonnummeret er feil / har mangler");
      }
      if (!this.associations.associations_id) {
        this.errors.push(
          "Forbund mangler, dersom forbundet ikke står i listen, opprett et nytt under forbund menyen"
        );
      }
      if (this.features_list.length < 28) {
        this.errors.push("Mangler ett/flere tall i en egenskaper");
      }
      if (this.features_list.length == 28) {
        for (let i = 0; i < this.features_list.length; i++) {
          let value = this.features_list[i];
          if (i < 16 || i > 26) {
            if (value < 0 || value > 3) {
              this.errors.push(
                "Ulovlig inntasting av tall i fysiske egenskaper"
              );
            }
          } else if (i > 15 && i < 27) {
            if (value < 0 || value > 1) {
              this.errors.push(
                "Ulovlig inntasting av tall i psykologiske egenskaper"
              );
            }
          }
        }
      }
      if (this.errors.length != 0) {
        this.$alert(this.errors, "Feil", {
          confirmButtonText: "OK",
          callback: (action) => {
            this.$message({
              type: "info",
              message: this.errors,
            });
          },
        });
      } else {
        this.storeActivity = true;
      }
    },
    retrieveCategory() {
      CategoryDataService.getAll()
        .then((response) => {
          this.categories = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrieveAssociation() {
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
      this.retrieveCategory();
      this.retrieveAssociation();
    },
    saveActivity() {
      let data = {
        activities_name: this.activity.activities_name,
        telephone: this.activity.telephone,
        email: this.activity.email,
        activities_comments: this.activity.activities_name,
        features: this.features_list,
        associations_id: this.associations.associations_id,
      };
      ActivityDataService.create(data)
        .then((response) => {
          this.activity.activities_id = response.data.activities_id;
          this.$notify({
            title: "Aktiviteten er lagt til",
            message: data.activities_name,
            type: "success",
          });
          this.refreshList();
          this.session();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    session() {
      if (this.$session.exists()) {
        this.$session.start();
        this.$session.set("activity", this.activity.activities_id);
      }
    },
  },
  mounted() {
    this.retrieveCategory();
    this.retrieveAssociation();
  },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.2/lib/theme-chalk/index.css");
ul {
  list-style: none;
  text-align: left;
  display: table;
}
.el-button {
  background-color: #548687;
  color: #ffff;
  border-color: #0000;
}
.el-button:hover {
  background-color: #72b1b3;
  color: #ffff;
  border: 1px solid;
  border-color: #548687;
}
.el-row {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  border-bottom-color: LightGray;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
}
.el-input-number {
  border: 1px solid;
  border-color: black;
}
input[type="text"],input[type="email"],select {
  padding: 6px;
  border-color: #0000;
  border: 1px solid;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
fieldset {
  overflow-y: scroll;
  height: 600px;
}
</style>