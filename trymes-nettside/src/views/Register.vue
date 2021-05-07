<template>
    <div>
        <RegisterUser :register="register" />
        <button @click="quizpage"> {{ next }} </button>
    </div>
</template>

<script>
import RegisterUser from "@/components/RegisterUser.vue";

    export default {
        name: "Register",
        component: RegisterUser,
        register:"En kort registrering",
        data(){
            return{
                next:"Neste",
            };

        },
        methods:{
            quizpage(){
                this.$router.push({ path: "/register/quiz" });
            }
        }
    };
    
</script>

<style scoped>

</style>