<template>
    <div>
       <!-- <tbody>
            <table class="tableList">
            <tr>
                <th>{{ list_of_results }}</th>
            </tr>
            <tr v-for="item in itemList" :key="item.activity">
                <td> {{ item.activity }}</td>
            </tr>
            </table>
        </tbody>-->
        <h2>{{ list_of_results }}</h2>
        <ul>
            <li v-for="item in itemList" :key="item.activity"> {{ item.activity }} </li>
        </ul>
    </div>
</template>

<script>
//import labels from "../activity-data.js";
    export default {
        name: "ResultsList",
        props: {
            list_of_results:String,
        },
        data(){
            return { 
                itemList: [
                    { activity: "Handball" }, 
                    { activity: "Fotball" }, 
                    { activity: "Sjakk" }, 
                    { activity: "Orientering" }, 
                    { activity: "Hekkeløp" }, 
                    { activity: "Hesteriding" }, 
                    { activity: "Skyting på bane" }, 
                    { activity: "Paintball" }, 
                    { activity: "Curling" }, 
                    { activity: "Dans" },
                ],
             };
        }
    };
</script>

<style scoped>

table.tableList { 

margin-right: auto;

margin-left: auto;

}
   

tbody {
    text-align: left;
}

li {
    list-style-type: none;
}
</style>