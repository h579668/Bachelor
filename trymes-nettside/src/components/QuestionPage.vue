<template>
  <div class="quiz">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ information }}</p>
    </div>
    
    <div v-for="item in quizItems" :key="item.question">
      <div id="questions">
        <h2>{{ item.question }}</h2>
        <p>{{ item.info }}</p>
        <input type="radio" :name="item.id" value="1" />
        <label> Synes det er kjempegøy </label> <br />

        <input type="radio" :name="item.id" value="2" />
        <label> Helt greit </label><br />

        <input type="radio" :name="item.id" value="3" />
        <label> Liker ikke i det hele tatt </label>
      </div>
    </div>

    <div>
      <button @click="result" id="resultbtn" class="restult-btn result-purple">
        Gå til resultater
      </button>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11" type="JavaScript"></script>
<script>
export default {
  name: "QuestionPage",
  props: { title: String, information: String },
  data() {
    return {
      quizItems: [
        { 
          id: "1", 
          question: "Styrkeøvelser",
          info: "(armhevinger, knebøy, situps, vekter osv)"
          },
        { 
          id: "2", 
          question: "Spenst/hurtighet",
          info: "(hopping, sprint, kasting osv)"
          },
        {
          id: "3",
          question: "Utholdenhet",
          info: "(gåturer, jogging, svømme langt, sykkeltur osv)"
        },
        {
          id: "4",
          question: "Bevegelighet",
          info: "(tøying, spagat, utstrekking osv)"
        },
        {
          id: "5",
          question: "Balanse",
          info: "(gå på bom/line, stå på en fot, bygge store tårn, stå på tærne osv)"
        },
      ],
    };
  },
  methods: {
    result() {
      this.$router.push({ path: "/quiz/results" });
    },
  }
};
</script>

<style scoped>
.quiz {
margin: 20px;
}

#questions {
  padding-bottom: 20px;
  padding-top: 10px;
}

#resultbtn {
  background-color: #424242;
  color: #ffffff;
  font-size: 30px;
}
</style>

