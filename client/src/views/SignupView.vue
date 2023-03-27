<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Sign Up</h1>
    <p>Email</p>
    <input type="text" v-model="email">
    <p>Password</p>
    <input type="text" v-model="password">
    <button @click="postUser()">sign up</button>
  </main>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                email: "",
                password: ""
            };
        },
        methods: {
            async postUser(){
                let res = await axios.post('http://localhost:8000/api/signup',{
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    console.log(response);

                })
                .catch((err) => {
                    console.log(rsponse);
                })
            }
        }
    }
</script>
