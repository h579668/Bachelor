<template>
    
    <div>
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
        </el-button>
    </div>
</template>

<script>
import NavButtons from "@/components/NavButtons.vue"

export default {
    name: "NavButtons",
    
    data(){
        return{
            createFieldsOpen: true,
            lookFieldsOpen: false,
            editFieldsOpen: false,
            addFieldsOpen: false,

        }
    },
    methods:{
        openCreateFields(){
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
         },

    }
    
}
</script>