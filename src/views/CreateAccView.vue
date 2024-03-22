<template>
    <div id="landing">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-white mb-3">Sign up now with W store</h1>
                <p class="col-lg-10 fs-4 text-white">Get unlimited access to W-store's latest product, Sign up and get started with us!</p>
              </div>
              <div class="col-md-10 mx-auto col-lg-5" id="bgForm">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Your name" v-model="user_profile" data-inp>
                    <label for="floatingName">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" v-model="user_email" data-inp>
                    <label for="floatingEmail">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user_password" data-inp>
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingRole" placeholder="Role" v-model="user_role" disabled data-inp>
                    <label for="floatingRole">Identity code</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingImgInput" placeholder="image" v-model="user_image" data-inp>
                    <label for="floatingImgInput">image</label>
                  </div>
                  <div class="d-flex gap-1 mt-2">
                    <button class="w-100 btn btn-lg" type="submit" id="btn" v-if="this.user_profile.length === 0 || this.user_email.length === 0 || this.user_password.length === 0 || this.user_password.length < 5 || this.user_image.length === 0" disabled>Fill in your details</button>
                    <button @click="signUser()" class="w-100 btn btn-lg btn-primary" id="btn" v-else>Sign up <i class="fa-regular fa-user fa-bounce fa-lg" style="color: #000000;"></i></button>
                  </div>
                  <hr class="my-4">
                  <small><router-link to="/login" class="text-white">I have an account</router-link></small>
                <div id="eerTxt"></div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import router from '@/router';
export default {

    data(){
      return {
        user_profile : '',
        user_email : '',
        user_password : '',
        user_role : 'user',
        user_image : ''
      }
    },
    methods : {
      signUser(){
        this.$store.dispatch('SignUser', this.$data)
        router.push('/login')
      }
    }
    
}
</script>
<style scoped>

#landing{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('https://cdn-images.imagevenue.com/fe/e9/59/ME17RH4H_o.png');
  min-height: 100vh !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.147) 50%, rgba(0, 0, 0, 0.068));
}

#bgForm{
  background-color: #5005f346;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

[data-inp]{
  box-shadow: 2px 2px 14px 2px rgba(0, 0, 0, 0.375);
  background-color: rgba(0, 255, 255, 0);
  color: whitesmoke;
}

#btn{
  background-color: rgb(0, 149, 255);
  font-weight: 600;
  color: whitesmoke;
  text-shadow: -2px 5px 6px rgb(0, 18, 217);
}
#btn:hover{
  transform: scale(110%);
}
    
</style>