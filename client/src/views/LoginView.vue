<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Login</h1>
    <p>Email</p>
    <input type="text" v-model="email">
    <p>Password</p>
    <input type="text" v-model="password">
    <button>login</button>
    <p> {{ validation }} </p>
  </main>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return{
                email: "",
                password: "",
                validation: ""
            }
        },
        methods:{
          async postUser(){
            let res = await axios.post('http://localhost:8000/api/login', {
              email: this.email,
              password: this.password
            })
            .then((response) => {
              console.log;
              if(
                response.data == "auth/invalid-email" ||
                response.data == "auth/missing-email" ||
                response.data == "auth/wrong-password" ||
                response.data == "auth/user-not-found"
              ){
                this.validation = "wrong email or password";
              }
              else{
                const uid = response.data;
                console.log(uid);
                localStorage.setItem('uid', uid);
                this.$router.push({path: "/"})
              }
            })
          }
        }
    }
</script>
