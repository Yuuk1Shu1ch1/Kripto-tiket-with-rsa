<template>
  <div class="container">
    <div class="flex" id="dashboard">
      <h1>Pemesanan Tiket</h1>
        <label for="Nama">Nama</label>
        <input type="text" id="Nama" v-model="name">
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email">
        <label for="NoHp">No Hp</label>
        <input type="text" id="NoHp" v-model="nohp">
        <label for="Alamat">Alamat</label>
        <input type="text" id="Alamat" v-model="alamat">
        <label for="KTP/NIK">KTP/NIK</label>
        <input type="text" id="KTP/NIK" v-model="ktp">
        <button @click="submitForm()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { getRandomPrime, gcd, modInverse, modExp } from "../components/rsa.js";

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
        // Enkripsi KTP/NIK menggunakan RSA
        const p = getRandomPrime();
        const q = getRandomPrime();
        const n = p * q;
        const phi = (p - 1) * (q - 1);
        let e = 2;
        while (e < phi) {
          if (gcd(e, phi) === 1) {
            break;
          }
          e++;
        }
        const d = modInverse(e, phi);
        const m = parseInt(this.ktp);
        const c = modExp(m, e, n);
        const decryptedKtp = modExp(c, d, n);
        // Kirim data ke server
        const data = {
          name: this.name,
          email: this.email,
          nohp: this.nohp,
          alamat: this.alamat,
          ktp: this.c, // Kirim ktp yang telah dienkripsi
          uid: localStorage.getItem("uid")
        };
        try {
          const response = await axios.post("https://2b48-118-99-76-138.ap.ngrok.io/api/order", data);
          console.log(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    }
}
</script>
