<template>
        <nav class="navbar navbar-expand-lg" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand text-black" href="#">
                    <img src="https://cdn-thumbs.imagevenue.com/ab/92/30/ME17RFMK_t.png" alt="Wstore-Logo" width="35" height="35" class="d-inline-block align-text-center">
                    W-Store
                  </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <router-link class="nav-link" to="/about">About</router-link> 
                    <router-link class="nav-link" to="/products">products</router-link> 
                    <router-link class="nav-link" to="/admin" v-if="$cookies.get('jwt')">Admin</router-link> 
                    <router-link class="nav-link" to="/profile" v-if="$cookies.get('jwt')">profile</router-link>
                    <router-link class="nav-link" to="/login">login</router-link>
                    <router-link class="nav-link" id="cartXYZ" to="/cart" v-if="$cookies.get('jwt')"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #0497c9;"></i> <span>{{count}}</span></router-link>
                  </div>
                </div>
                <div>
                  <button v-if="$cookies.get('jwt')" @click="logOut()" id="btn"><i class="fa-solid fa-arrow-right-from-bracket fa-sm" style="color: #ffffff;"></i></button>
                </div>
            </div>
          </nav>
</template>
<script>

export default {

  data(){
    return {
      count : 0,
    }
  },

  methods : {
    watchCart(){
      
    },
    logOut(){
      this.$store.dispatch('logoutUser')
    }
  }
    
}
</script>
<style scoped>

#navbar {
    position: fixed;
    width: 100%;
    background: rgba(255, 255, 255, 0);
    z-index: 1;
    top: 0;
}

#btn{
  background: black;
  border: none;
  border-radius: 50%;
  height: 27px;
  width: 27px;
}

nav {
    padding: 20px;
  }
  
nav a {
  font-weight: bold;
  color: #0497c9;
}
  
nav a.router-link-exact-active {
  color: #00bfff;
}
#cartXYZ span{
  background: red;
  color: white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-size: 13px;
  padding: 3px;
  transform: scale(50%);
}


@media (max-width: 995px) {
  #navbar{
      height: auto;
      background: rgb(255, 255, 255);
  }
}
    
</style>