<template>
    <div class="pt-5 mt-5">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
              </div>
              <div class="col-md-10 mx-auto col-lg-5">
                <!-- <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary"> -->
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Your name" v-model="user_profile">
                    <label for="floatingName">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" v-model="user_email">
                    <label for="floatingEmail">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user_password">
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingRole" placeholder="Role" v-model="user_role">
                    <label for="floatingRole">userRole</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingImgInput" placeholder="image" v-model="user_image">
                    <label for="floatingImgInput">image</label>
                  </div>
                  <div class="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="user_deets" required> Accept T's&c's
                    </label>
                  </div>
                  <div class="d-flex gap-1 mt-2">
                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="signUser()">Register</button>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="loginUser()">login</button>
                  </div>
                  <hr class="my-4">
                  <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                <!-- </form> -->
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
        user_profile : null,
        user_email : null,
        user_password : null,
        user_role : null,
        user_image : null
      }
    },
    methods : {
      signUser(){
        console.log(this.$data.user_profile)
        this.$store.dispatch('SignUser', this.$data)
        window.location.reload()
      },
      loginUser(){
        // console.log(this.$data.user_profile)
        this.$store.dispatch('loginUser', this.$data)
      }
    }
    
}
</script>
<style lang="">
    
</style>