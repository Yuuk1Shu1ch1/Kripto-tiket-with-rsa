<template>
<nav class="navbar navbar-expand-lg" style="background-color: turquoise;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">The 1st AWIKWOK CONCERT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/order">Order</a>
        </li>
        <li>
          <ul class="navbar-nav me-5 me-lg-5">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mr-5 mr-lg-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Your Account
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="signOut()">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    signOut() {
      localStorage.removeItem('uid');
      this.$router.push({path: "/"})
    }
  }
}
</script>

