<!--The homepage of the website-->
<template lang=en>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'RegisterUser' }">
      <button id="quizButton" class="foo bar">Start test</button>
    </router-link>
    <p>Og finn 10 passende aktiviteter nær deg!</p>

    <div id="info1">
      <h3>Hvorfor ta quizen</h3>
      <div class="text">
        Vi er skapt for bevegelse og alle bør oppleve mestring. Det finnes mange forskjellige 
        måter å bevege seg på og å få mestingsoppleveser. Dersom du ikke har funnet din egen trygge mestringsarena, 
        eller ønsker å finne flere aktiviteter som passer til akkurat deg, kan du ta denne Quizen så kan det 
        hjelpe deg på veien til nye mestringsarenaer!
      </div>
    </div>

    <div id="info2">
      <h3>Info</h3>
      <div class="text">
        Denne testen er utviklet av Energiteamet PBU ved Haukeland Universitetssykehus. Verdiene 
        på de forskjellige parametrene som brukes til å finne de forskjellige idrettenes og aktivitetenes,  
        kapasitets- og kvalitetsanalyser er innhentet fra de forskjellige særforbundene samt utvalgte 
        kompetansepersoner. Den er ikke utfyllende og det vil kontinuerlig være et arbeid for å legge til 
        flere aktiviteter og områder for aktiviteter.
      </div>
    </div>

    <div id="info3">
      <h3>Visste du at?</h3>
      <div class="text">
        Fysisk aktivitet hjelper deg til å lære bedre og huske mer av det du har lært? Det finnes 
        et stoff som heter "Brain derived neurotrophic factor" som skilles ut når vi trener, som hjelper til 
        med akkurat dette. Derfor bør alle være fysisk aktive hver dag.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data () {
    return{ msg: "TryMes - Trygg Mestringsarena"}
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-size: 40px;

}
#quizButton {
  background-color: #424242;
  color: #ffffff;
  font-size: 30px;
  cursor: pointer;
}
#quizButton:hover {
   background-color: #548687;
 }

h3 {
  font-size: 20px;
  margin: 40px 0 0;
  font-family: "Courier New", Courier, monospace;
}

#info1 {
  position: absolute;
  left: 30px;
  width: 30%;
  height: auto;
}

#info2 {
  position: absolute;
  width: 30%;
  right: 35%;
  left: 35%;
  height: auto;
}
#info3 {
  position: absolute;
  right: 30px;
  width: 30%;
  height: auto;
}

.text {
  background-color: #A7D3A6;
  min-height: 200px;
  padding: 15px;
  margin: 5px;
  text-align: left;
}
</style>
