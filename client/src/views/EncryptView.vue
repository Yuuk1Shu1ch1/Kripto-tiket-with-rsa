<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Encrypt</h1>
    <input type="text" v-model="nik">
    <button @click="encryptString()">encrypt</button>
  </main>
</template>

<script>
    export default{
        data(){
            return{
                nik: "",
            }
        },
        methods: {
            isPrime(num){
                if(num <= 0){
                    return false
                }
                for(let i = 2; i < Math.sqrt(num); i++){
                    if(num % i == 0){
                        return false
                    }
                    else{
                        return true
                    }
                }
            },
            randomPrime(){
                let num = Math.floor(Math.random() * (20 - 4 + 1)) + 4;
                while(this.isPrime(num) == false){
                    num = Math.floor(Math.random() * (20 - 4 + 1)) + 4;
                }
                return num
            },
            encrypteRsa(key1, key2, num){
                // Define the values of p, q, and e
                let p = key1;
                let q = key2;

                let e = 3;

                // Calculate the modulus n and totient phi
                let n = p * q;
                let phi = (p - 1) * (q - 1);

                // Find the modular multiplicative inverse of e (the private key exponent)
                let d = 1;
                while ((e * d) % phi !== 1) {
                    d++;
                }

                // Encrypt the plaintext message using the public key
                let encrypted = BigInt(num) ** BigInt(e) % BigInt(n);

                // Log the encrypted and decrypted values to the console
                console.log("Encrypted message:", encrypted.toString());
            },
            encryptString(){
                let key1 = this.randomPrime()
                let key2 = this.randomPrime()

                let str = this.nik
                let chars = str.split("")
                let size = str.length
                let encrypted = new Array(size)

                for(let i = 0; i < size; i++){
                    let charCode = chars[i].charCodeAt(0)
                    encrypted[i] = this.encrypteRsa(key1, key2, charCode)
                }

                console.log(encrypted)
            }
        }
    }
</script>