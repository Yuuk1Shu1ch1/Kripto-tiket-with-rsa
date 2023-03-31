<template>
    <header>
        <div class="page-header min-vh-100" :style="{ backgroundImage: `url(${bgImage})` }"
        loading="lazy">
        <span class="mask bg-gradient-dark opacity-5"></span>
        <div class="container">
            Bocchi Goes TO ITS
        </div>
        </div>
    </header>
</template>


<script>
import bgImage from '../assets/homebg.png'; 

export default {
    name: 'App',
    data() {
        return {
            bgImage,
        };
    },
    methods: {
        checkUser(){
            const uid = localStorage.getItem('uid');
            if(uid == "auth/too-many-requests"){
              this.$router.push({path: "/"})
            }
            else if(uid)
            {
                this.$router.push({path: "/home"})
            }
            else{
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