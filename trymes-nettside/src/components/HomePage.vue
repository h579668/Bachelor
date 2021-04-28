<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div id="quizBtn">
        <router-link to="/quiz">Start test</router-link>
    </div>
    <p>Og finn 10 passende aktiviteter nær deg! </p>
    
    <div id="divWhy">
        <h3>Hvorfor ta quizen</h3>
        <div class="text">Her kommer tekst</div>
    </div>

    <div id="divDidUKnow">
        <h3>Visste du at?</h3>
        <div class="text"> Her kommer tekst</div>
    </div>

    <div id="divInfo">
        <h3>Info</h3>
        <div class="text">Her kommer tekst</div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
  font-family: 'Courier New', Courier, monospace;
}

#divWhy {
    position: absolute;
    left: 30px;
    width: 30%;
    height: auto;
}

#divDidUKnow {
    position: absolute;
    width: 30%;
    right: 35%;
    left: 35%;
    height: auto;
}
#divInfo {
    position: absolute;
    right: 30px;
    width: 30%;
    height: auto;
}

.text {
    background-color: grey;
    height: 200px;
    padding: 15px;
    margin: 5px;
}

</style>
