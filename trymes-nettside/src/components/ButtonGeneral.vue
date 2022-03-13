
<!--Denne blir brukt som standardknapp-->
<template>
    <el-button size="medium">
        <slot />
    </el-button>
</template>

<script>
    export default {
        name: "GeneralButton"
    }
</script>

<style scoped>
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

</style>