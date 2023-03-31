<template>
  <div class="container text-black fw-bold m-auto mt-5">
    <div class="card opacity-50" style="background-color: white;">
        <h1>Invoice</h1>
        <p class="card-text"><strong>Name:</strong> {{ name }}</p>
        <p class="card-text"><strong>Email:</strong> {{ email }}</p>
        <p class="card-text"><strong>No Hp:</strong> {{ nohp }}</p>
        <p class="card-text"><strong>Alamat:</strong> {{ alamat }}</p>
        <p class="card-text"><strong>KTP/NIK:</strong> {{ decrypt }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getRandomPrime, gcd, modInverse, modExp, encrypt, decrypt } from "../components/rsa.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      nohp: "",
      alamat: "",
      ktp: "",
      uid: "",
      privateKey: [],
      decrypt: ""
    }
  },
  methods: {
    async getInvoice() {
      const orderId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:8000/api/order/${orderId}`)
        this.name = response.data.name
        this.email = response.data.email
        this.nohp = response.data.nohp
        this.alamat = response.data.alamat
        this.ktp = response.data.ktp
        this.privateKey = response.data.privateKey
        this.decrypt = decrypt(this.ktp, this.privateKey)
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async checkUser(){
            const uid = localStorage.getItem('uid');
            const orderId = this.$route.params.id;
            if(uid){
              this.$router.push({path: `/invoice/${orderId}`})
            }
            else {
                this.$router.push({path: "/"})
            }
    }
  },
  mounted() {
    this.getInvoice();
    this.checkUser();
  }
}

</script>

<style>

</style>