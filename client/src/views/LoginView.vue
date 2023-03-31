<template>
  <div>
      <!-- <h1>Login</h1>
      <p>Email</p>
      <input type="text" v-model="email" class="text-center mb-4 text-primary">
      <p>Password</p>
      <input type="text" v-model="password"  class="text-center mb-4 text-primary">
      <button @click="postUser()">login</button>
      <p> {{ validation }} </p>
      <p>Don't have any account just <router-link to="/signup">Signup</router-link></p> -->
      
      <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="col-md-4 p-5 border rounded-4 shadow-lg" style="background-color: white; ">
                <h2 class="text-center mb-4 text-primary">Login</h2>
                <div>
                    <div class="mb-3">
                        <label for="InputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-primary" id="InputEmail" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control border border-primary" id="InputPassword" v-model="password">
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit" @click="postUser()">Login</button>
                        <p> {{ validation }} </p>
                    </div>
                  </div>
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <a href="/signup" class="text-primary fw-bold">Signup</a></p>
                </div>
            </div>
        </div>
    
    </div>
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
            let res = await axios.post('https://4ee5-118-99-76-138.ap.ngrok.io/api/login', {
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
                this.$router.push({path: "/home"})
              }
            })
          },
          
        }
    }
</script>
