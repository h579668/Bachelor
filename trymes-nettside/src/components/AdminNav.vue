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
  <el-menu
  :default-active="1"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">Aktivitet</template>
    <el-menu-item index="2-1"><router-link :to="{ name: 'CreateNewActivity' }"> <i class="el-icon-plus" />Ny aktivitet</router-link></el-menu-item>
    <el-menu-item index="2-2"><i class="el-icon-edit-outline" /> Endre Aktivitet </el-menu-item>
    <el-menu-item index="2-3"><router-link :to="{ name: 'EntireList' }"> <i class="el-icon-reading" /> Alle aktiviteter</router-link></el-menu-item>
  </el-submenu>
   <el-submenu index="2">
        <template slot="title">
          Forbund
        </template>
        <el-menu-item-group title="Forbund">
          <el-menu-item index="2-1"> 
            <router-link :to="{ name: 'CreateAssociation' }"> <i class="el-icon-plus" /> Nytt forbund</router-link> 
          </el-menu-item>
          <el-menu-item index="2-2"> 
            <router-link :to="{ name: 'AssociationActivity' }"> <i class="el-icon-search" /> Finn Aktivitet </router-link>
          </el-menu-item>
          <!--<el-menu-item index="2-2"><i class="el-icon-plus"> 
            <router-link :to="{ name: 'AddAssociation' }"> Legg til flere aktivteter </router-link></i>
          </el-menu-item>-->
          <el-menu-item index="2-3">
            <router-link :to="{ name: 'EditAssociation' }"> <i class="el-icon-edit-outline" /> Endre forbund </router-link>
          </el-menu-item>

        </el-menu-item-group>
      </el-submenu>

</el-menu>
<!--
    <el-row class="tac">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Aktivitet</span>
        </template>
        <el-menu-item-group title="Aktivitet">
            <el-menu-item index="1-1">
              <router-link :to="{ name: 'CreateNewActivity' }"> <i class="el-icon-plus" />Ny aktivitet</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
            <i class="el-icon-edit-outline" /> Endre Aktivitet 
          </el-menu-item>
            <el-menu-item index="1-3">
              <router-link :to="{ name: 'EntireList' }"> <i class="el-icon-reading" /> Alle aktiviteter</router-link>
            </el-menu-item>
  
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Forbund</span>
        </template>
        <el-menu-item-group title="Forbund">
          <el-menu-item index="2-1"> 
            <router-link :to="{ name: 'CreateAssociation' }"> <i class="el-icon-plus" /> Nytt forbund</router-link> 
          </el-menu-item>
          <el-menu-item index="2-2"> 
            <router-link :to="{ name: 'AssociationActivity' }"> <i class="el-icon-search" /> Finn Aktivitet </router-link>
          </el-menu-item>
          <--<el-menu-item index="2-2"><i class="el-icon-plus"> 
            <router-link :to="{ name: 'AddAssociation' }"> Legg til flere aktivteter </router-link></i>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link :to="{ name: 'EditAssociation' }"> <i class="el-icon-edit-outline" /> Endre forbund </router-link>
          </el-menu-item>

        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>-->
<!--
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
            <el-menu-item index="1-1"><i class="el-icon-plus" ><router-link :to="{ name: 'CreateNewActivity' }"> Ny aktivitet</router-link></i></el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-reading" ><router-link :to="{ name: 'EntireList' }"> Registrerte aktiviteter</router-link></i></el-menu-item>
  
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
           <el-menu-item index="2-3"><i class="el-icon-search">
          <router-link :to="{ name: 'AssociationActivity' }"> Finn Aktivitet </router-link></i>
          </el-menu-item>
          <--<el-menu-item index="2-2"><i class="el-icon-plus"> 
            <router-link :to="{ name: 'AddAssociation' }"> Legg til flere aktivteter </router-link></i>
          </el-menu-item>
          <el-menu-item index="2-3"><i class="el-icon-edit-outline" >
          <router-link :to="{ name: 'EditAssociation' }"> Endre forbund </router-link></i>
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
    </div>-->
    </div>
    </div>
</template>

<style scoped>
  /*.el-menu{
    text-align: left;
    width: 200px;
  }*/

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
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath);
      }
}
}

</script>
