<template>
    <div>
        <RegisterUser :register="register" />
        <button id="nextbtn" @click="quizpage"> {{ next }} </button>
    </div>
</template>

<script>
import RegisterUser from "@/components/RegisterUser.vue";

    export default {
        name: "Register",
        register:"En kort registrering",
        components: { RegisterUser },
        data(){
            return{
                next:"Start testen!",
        }

        },
        methods:{
            quizpage(){
                this.$router.push({ path: "/quiz" });
            }
        }
    };
    
</script>

<style scoped>
#nextbtn {
  margin-top: 5%;
  background-color: #424242;
  color: #ffffff;
  font-size: 23px;
}

#nextbtn:hover {
   background-color: #548687;
 }

</style>