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
    <button @click="display()">sign up</button>
  </main>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: ""
            };
        },
        methods: {
            display(){
                console.log(this.email);
                console.log(this.password);
            }
        }
    }
</script>