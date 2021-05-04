<template>
    <div>
        <table class="tableList">
            <thead>
                <tr>
                    <th>{{ list_of_results }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in itemList" :key="item.activity">
                    <td> {{ item.activity }}</td>
                </tr>
            </tbody>
        </table>
        
        <!-- <h2>{{ list_of_results }}</h2>
        <ul>
            <li v-for="item in itemList" :key="item.activity"> {{ item.activity }} </li>
        </ul>-->
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

.tableList {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
   
}
   

tbody {
    text-align: left;
}

li {
    list-style-type: none;
}
</style>