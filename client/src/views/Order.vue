<template>
  <div class="container mt-4 d-flex justify-content-center align-items-center">
    <div class="col-md-4 p-5 border rounded-4 shadow-lg" style="background-color: white; " id="dashboard">
      <h1>Order Ticket</h1>
      <div class="container list">
        <label for="Nama" class="form-label">Nama</label>
        <input type="text" id="Nama" v-model="name" class="form-control border border-primary">
        <br/>
        <label for="Email" class="form-label">Email</label>
        <input type="text" id="Email" v-model="email" class="form-control border border-primary">
        <br/>
        <label for="NoHp" class="form-label">No Hp</label>
        <input type="text" id="NoHp" v-model="nohp" class="form-control border border-primary">
        <br/>
        <label for="Alamat" class="form-label">Alamat</label>
        <input type="text" id="Alamat" v-model="alamat" class="form-control border border-primary">
        <br/>
        <label for="KTP/NIK" class="form-label">KTP/NIK</label>
        <input type="text" id="KTP/NIK" v-model="ktp" class="form-control border border-primary">
        <br/>
        <button class="btn btn-primary" type="submit" @click="submitForm()">Submit</button>
      </div>
    </div>
  </div> 
</template>

<script>
import axios from "axios"
import { getRandomPrime, gcd, modInverse, modExp, encrypt, decrypt, } from "../components/rsa.js";

export default {
    data() {
        return{
            name: "",
            email: "",
            nohp: "",
            alamat: "",
            ktp: "",
            uid: ""
        }
    },
    methods:{
      async submitForm() {
        // const p = getRandomPrime();
        // const q = getRandomPrime();
        
        const p = 2;
        const q = 7;
        const n = p * q;
        const phi = (p - 1) * (q - 1);
        let e = 2; //public
        while (e < phi) {
          if (gcd(e, phi) === 1) {
            break;
          }
          e++;
        }
        const d = modInverse(e, phi); //private

        let publicKey = [e, n]
        let privateKey = [d, n]

        const encryptedKtp = encrypt(this.ktp, publicKey);
        const decryptedKtp = decrypt(encryptedKtp, privateKey);

        console.log("KTP: ", this.ktp);
        console.log("KTPe: ", encryptedKtp)
        console.log("KTPd: ", decryptedKtp)

        const data = {
          name: this.name,
          email: this.email,
          nohp: this.nohp,
          alamat: this.alamat,
          ktp: encryptedKtp, // Kirim ktp yang telah dienkripsi
          uid: localStorage.getItem("uid"),
          private: privateKey
        };
        try {
          const response = await axios.post("http://localhost:8000/api/order", data);
          console.log(response.data);
          console.log(response);
          this.$router.push({path:  `/invoice/${response.data}`});
        } catch (error) {
          console.log(error.response);
        }
      },
      checkUser(){
            const uid = localStorage.getItem('uid');
            if(uid == null){
              this.$router.push({path: "/"})
            }
      }
    },
    created(){
        this.checkUser();
    }
}
</script>


<style scoped>
</style>