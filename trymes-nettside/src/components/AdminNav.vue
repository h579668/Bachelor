<!--The code for navigation menu, where the administrator can choose what to do-->

<template>
  <div>
    <div id="app">
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">Aktivitet</template>
          <el-menu-item index="2-1"
            ><router-link :to="{ name: 'CreateNewActivity' }">
              <i class="el-icon-plus" />Ny aktivitet</router-link
            ></el-menu-item
          >
          <el-menu-item disabled index="2-2"
            ><i class="el-icon-edit-outline" /> Endre Aktivitet
          </el-menu-item>
          <el-menu-item index="2-3"
            ><router-link :to="{ name: 'EntireList' }">
              <i class="el-icon-reading" /> Alle aktiviteter</router-link
            ></el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"> Forbund </template>
            <el-menu-item index="2-1">
              <router-link :to="{ name: 'CreateAssociation' }">
                <i class="el-icon-plus" /> Nytt forbund</router-link
              >
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link :to="{ name: 'AssociationActivity' }">
                <i class="el-icon-search" /> Finn Aktivitet
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link :to="{ name: 'EditAssociation' }">
                <i class="el-icon-edit-outline" /> Endre forbund
              </router-link>
            </el-menu-item>
            <el-menu-item disabled index="2-4">
                <i class="el-icon-reading" /> Alle forbund
            </el-menu-item>
        </el-submenu>
        <el-menu-item disabled index="3">
          Liste over deltagere
        </el-menu-item>
        <el-submenu disabled index="4">
           <template slot="title"> Informasjon</template>
            <el-menu-item index="4-1"> Bruker-informasjon </el-menu-item>
            <el-menu-item index="4-2"> Aktivitet-informasjon </el-menu-item>
            <el-menu-item index="4-3"> Spørsmål-informasjon </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #ffff;
}
</style>

<script>
export default {
  name: "AdminNav",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
