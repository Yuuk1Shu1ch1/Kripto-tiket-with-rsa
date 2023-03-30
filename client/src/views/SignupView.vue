<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- <main>
    <h1>Sign Up</h1>
    <p>Email</p>
    <input type="text" v-model="email">
    <p>Password</p>
    <input type="text" v-model="password">
    <button @click="postUser()">sign up</button>
  </main> -->
  <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 shadow-sm border rounded-4"  style="background-color: white;">
                <h2 class="text-center mb-4 text-primary">Sign Up</h2>
                <div></div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="exampleInputPassword1" v-model="password">
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit" @click="postUser()">Sign Up</button>
                        <p>{{ validation }}</p>
                    </div>
                    <div class="mt-3">
                        <p class="mb-0  text-center">Already have an Account? <a href="/" class="text-primary fw-bold" @click="postUser()">login</a></p>
                    </div>
                </div>
            </div>
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
                let res = await axios.post('https://kripto-tiket-with-rsa.vercel.app/api/signup',{
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    if(
                        response.data == "auth/weak-password"
                    ){
                        this.validation = "weak password";
                    }
                    elseif(
                        response.data == "auth/weak-password" ||
                        response.data == "auth/email-already-in-use" ||
                        response.data == "auth/invalid-email" ||
                        response.data == "auth/missing-email"
                    );
                    {
                        this.validation = "wrong email or email invalid";
                    }
                    {
                    console.log(response);
                    this.$router.push("/");
                    }
                })
                .catch((err) => {
                    console.log(rsponse);
                })
            }
        }
    }
</script>
