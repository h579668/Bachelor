<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'RegisterUser' }">
      <button id="quizButton" class="foo bar">Start test</button>
    </router-link>
    <p>Og finn 10 passende aktiviteter nær deg!</p>

    <div id="info1">
      <h3>Hvorfor ta quizen</h3>
      <div class="text">Her kommer tekst</div>
    </div>

    <div id="info2">
      <h3>Visste du at?</h3>
      <div class="text">Her kommer tekst</div>
    </div>

    <div id="info3">
      <h3>Info</h3>
      <div class="text">Her kommer tekst</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data () {
    return{ msg: "Velkommen"}
    
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
  background-color: lightgray;
  height: 200px;
  padding: 15px;
  margin: 5px;
}
</style>
