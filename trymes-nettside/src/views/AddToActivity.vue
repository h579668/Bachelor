<template>
    <div>
        <el-row>
          <el-col :span="6" ><div class="grid-content bg-purple">
          <select
             class="form-control"
              v-model="activity.associations_id"
              :required="true">
            <option disabled value="">{{ select_an_association }}</option>
            <option v-for="association in associations" :value="association.associations_id" :key="association.associations_id" :id="association.associations_id">
              {{ association.associations_name }}
            </option>
          </select>
          </div>
         </el-col>

        <el-col :span="6" ><div class="grid-content bg-purple">
         <select
             class="form-control"
              v-model="activity.areas_id"
              :required="true">
           <option disabled value="">{{ select_an_association }}</option>
           <option v-for="area in areas" :value="area.associations_id" :key="area.associations_id" :id="area.associations_id">
              {{ area.country}} : {{ area.municipality}} : {{ area.county }}
           </option>
        </select>
        </div>
      </el-col>

      <el-col :span="6" ><div class="grid-content bg-purple">
        <select
         class="form-control"
         v-model="activity.age_id"
          :required="true">
          <option disabled value="">{{ select_an_age }}</option>
          <option v-for="age in age_intervals" :value="age.age_id" :key="age.age_id" :id="age.age_id">
           {{ age.age_values }}
         </option>
        </select>
        </div>    
      </el-col>
    </el-row>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>