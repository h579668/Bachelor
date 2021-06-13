<template>
    <div>
      <div id="app">
       <!-- <el-dropdown>
          <el-button type="primary">
           Aktivitet<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
         <el-dropdown-menu slot="dropdown">
          <el-dropdown-item> Legg til ny aktivitet</el-dropdown-item>
           <el-dropdown-item><router-link :to="{ name: 'EntireList' }"> Se alle aktiviteter</router-link></el-dropdown-item>
          <el-dropdown-item> Endre/slette aktivitet </el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown>
          <el-button type="primary">
           Forbund<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link :to="{ name: 'CreateAssociation' }">Legg til ny forbund</router-link></el-dropdown-item>
          <el-dropdown-item> 
            <router-link :to="{ name: 'EditAssociation' }"> Endre/slette forbund </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link :to="{ name: 'AddAssociation' }"> Legg til aktivitet i forbund</router-link>
            </el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>-->

 

  

  <div style="text-align:left;">
    <el-row class="tac">
      <el-col :span="8">

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Aktivitet</span>
        </template>
        <el-menu-item-group title="Aktivitet">
            <el-menu-item index="1-1"><i class="el-icon-plus" /><router-link :to="{ name: 'CreateNewActivity' }"> Ny aktivitet</router-link></el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-reading" /><router-link :to="{ name: 'EntireList' }"> Registrerte aktiviteter</router-link></el-menu-item>
  
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-menu"></i>
        <span>Forbund</span>
        </template>
        <el-menu-item-group title="Forbund">
          <el-menu-item index="2-1"><i class="el-icon-plus" />
           <router-link :to="{ name: 'CreateAssociation' }"> Nytt forbund</router-link>
           </el-menu-item>
           <el-menu-item index="2-3"><i class="el-icon-edit-outline" />
          <router-link :to="{ name: 'AssociationActivity' }"> Finn Aktivitet til Forbund </router-link>
          </el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-plus" /> 
            <router-link :to="{ name: 'AddAssociation' }">Legg til flere aktivteter </router-link>
          </el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-edit-outline" />
          <router-link :to="{ name: 'EditAssociation' }"> Endre forbund </router-link>
          </el-menu-item>

        
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3" disabled>
        <template>
        <i class="el-icon-document"></i>
        <span>Område</span>
        </template>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
      </el-menu>
      </el-col>
    </el-row>
    </div>
    </div>
    </div>
</template>

<style scoped>
 
  .el-radio-group{
    margin-bottom: 50px; 
  }

  a{
    text-decoration: none;
    color: #ffff;
  }


</style>

<script>
export default {
  name:"AdminNav",
  data(){
    return{
      isCollapse: true
      }
    },
  
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
}
}

</script>
