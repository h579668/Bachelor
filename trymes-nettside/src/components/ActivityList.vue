<template>
     <div>
        <table class="tableActivity">
            <thead>
                <tr>
                    <th>Aktivitet</th>
                    <th>Telefon</th>
                    <th>E-post</th>
                    <th>Forbund</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in activities" :key="item.activity">
                    <td> {{ item.activity }}</td>
                    <td> {{ item.tlf }}</td>
                    <td> {{ item.epost }}</td>
                    <td> {{ item.associations }}</td>
                </tr>
            </tbody>
        </table>
        <!-- <div class="col-md-6">
        <h4>{{msg}}</h4>
        <ul class="list-group">
            <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(activity, index) in activities"
            :key="index"
            @click="setActiveActivity(activity, index)"
            >
            {{ activity.navn }}
            </li>
        </ul>

        </div> -->
    </div>
</template>

<script>

export default {
  name: "ActivityList",

  data() {
    return {
      activities: [
            { activity: "Skateboard", tlf:"454 64 166", epost:"henning@norb.no", associations: "Brettforbundet"}, 
            { activity: "Snøbrett", tlf:"922 49 073", epost:"magnus@snowboardforbundet.no", associations: "Brettforbundet"}, 
            { activity: "Baneskyting", tlf:"975 92 754", epost:"ofh@dfs.no", associations: "Det frivillige Skyttervesen (ingen tilknytning til NIF)"}, 
            { activity: "Fallskjermhopping", tlf:"907 04 646", epost:"janerik.wang@nlf.no", associations: "Luftsportforbundet"}, 
            { activity: "Bueskyting", tlf:"", epost:"", associations: "NIF/Norges Bueskytterforbund. Og Norsk Langbuelag (NL)"}, 
            { activity: "Enduro motorsykkel", tlf:"415 64 430", epost:"a.sletholt@gmail.com", associations: "NMF"}, 
            { activity: "Aikido", tlf:"918 64 797", epost:"idalagosandersen@gmail.com", associations: "Norges Aikidoforbund"}, 
            { activity: "Amerikansk fotball", tlf:"472 01 596", epost:"tone.sparby@nif.idrett.no", associations: "Norges amerikanske idretters forbund"},  
            { activity: "Cheerleading", tlf:"986 66 494", epost:"daniela.ohnstad@nif.idrett.no", associations: "Norges amerikanske idretters forbund"},  
            { activity: "Freesbeegolf", tlf:"454 64 166", epost:"tone.sparby@nif.idrett.no", associations: "Norges amerikanske idretters forbund"}, 
        ],
      currentActivity: null,
      currentIndex: -1,
      navn: ""
    };
  },
};
</script>

<style>
.tableList {
    padding-top: 30px;
    text-align: left;
    margin: auto;
}
.tableList, th, td {
    padding-right: 50px;
}
</style>