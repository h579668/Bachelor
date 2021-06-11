<template>
    <div id="header">
      <el-menu :default-active="$route.path" class="el-menu" router 
        mode="horizontal" 
        @select="handleSelect"
        background-color="#5ead73"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-col :span="7" class="navbar_logo">
              <h2>TryMes</h2>
          </el-col>
          <el-menu-item index="/AdLogin" class="doc-right">Logg Inn</el-menu-item>
          <el-menu-item index="/AllActivities" class="doc-right">Alle aktiviteter</el-menu-item>
          <el-menu-item index="/AddToActivity" class="doc-right">Legg til forbund</el-menu-item>
          <el-menu-item index="/" class="doc-right">Hjem</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
}

</script>

<style scoped>

.el-menu .doc-right {
  float: right;
  cursor: pointer;
}


</style>