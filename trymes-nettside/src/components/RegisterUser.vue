<template>
  <div>
    <label for="area"> {{ area }}: </label>

   <!-- <sdynmic-select 
        :options="areaArray"
        @search="onSearchEventHandler"
        option-value="id"
        option-text="name"
        placeholder="Klikk for å finne ditt fylke"
        v-model="selectedObject" />-->
        <select v-model="select_area">
            <option v-for="a in area" :value="a.id" :key="a.id"> 
                {{a.place}}
            </option>
        </select>
  </div>
</template>

<script>
export default {
    name: "RegisterUser",
    props: {
        register:String
    },
    data() {
        return{
            area: [
                {id:1, place:"Vestland"}, 
                {id:2, place:"Oslo"},
            ],
            select_area: null,
        }
    },
    methods: {
        fetchArea:function(){
            "Vestland",
            "Oslo"
        }
}
};

</script>

<style scoped>
</style>