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
  </main>
</template>

<script>
    export default {
        data() {
            return{
                email: "",
                password: ""
            }
        },
        methods:{

        }
    }
</script>