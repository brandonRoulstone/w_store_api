<template>
    <div class="" id="formBody">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-white mb-3">Vertically centered hero sign-up form</h1>
                <p class="col-lg-10 fs-4 text-white">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
              </div>
              <div class="col-md-10 mx-auto col-lg-5 py-5" id="form">
                <!-- <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary"> -->
                  <!-- <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Your name" v-model="user_profile">
                    <label for="floatingName">Name</label>
                  </div> -->
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" v-model="user_email">
                    <label for="floatingEmail">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user_password">
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingRole" placeholder="Role" v-model="user_role" disabled>
                    <label for="floatingRole">Identity code</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingRole" placeholder="Specify your role to access as admin" v-model="user_role" v-if="this.user_email === 'JD1@gmail.com'">
                    <label for="floatingRole" v-if="this.user_email === 'JD1@gmail.com'">Specify your role to access as admin</label>
                  </div>
                  <!-- <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingImgInput" placeholder="image" v-model="user_image">
                    <label for="floatingImgInput">image</label>
                  </div> -->
                  <div class="d-flex gap-1 mt-2">
                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="loginUser()">login</button>
                  </div>
                  <hr class="my-4">
                  <small class="text-body-secondary"><router-link to="/signup">Click here to create an account</router-link></small>
                <div id="eerTxt"></div>
              </div>
            </div>
          </div>
    </div>
    <!--"user_profile": "JohnDoe",
        "user_email": "JD1@gmail.com",
        "user_password": "john",
        "user_role": "admin",
        "user_image": "nothing"-->
</template>
<script>
export default {

    data(){
      return {
        user_id : null,
        user_profile : '',
        user_email : '',
        user_password : '',
        user_role : 'user',
        user_image : ''
      }
    },
    methods : {
      loginUser(){
        // console.log(this.$data.user_profile)
        this.$store.dispatch('loginUser', this.$data)
      }
    }
    
}
</script>
<style scoped>

#formBody {
  background-image: url('https://cdn-images.imagevenue.com/3f/a1/52/ME17SWB0_o.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.343),rgb(0, 0, 0, 0.241));
}
#form{
  background-color: rgba(245, 245, 245, 0.352);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  z-index: 50;
}

/* #form::after{
  content: '.';
  color: black;
  transform: skew(0deg);
  height: 50%;
  width: 100%;
  background: linear-gradient(rgb(130, 137, 238), lightblue);
  filter: blur(5px);
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: 20%;
} */
    
</style>