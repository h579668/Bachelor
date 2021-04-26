<template>
  <div class="quiz">
    <h1>{{ props.headline }}</h1>
    <input type="radio" name ="alternative" value="something1" />
    <label for="alternative">Alternativ 1</label>
     <br>
    <input type="radio" name ="alternative" value="something2" />
    <label for="alternative"> Alternativ 2</label>
    <br>
    <input type="radio" name ="alternative" value="something3" />
    <label for="alternative"> Alternativ 3</label>
    <br>
    <input type="radio" name ="alternative" value="something4" />
    <label for="alternative"> Alternativ 4</label>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                name: "Quiz", 
                props:{
                    headline: "Ta quizen!",

                 }
            }
        

        },
    };
</script>

<style scoped>
</style>