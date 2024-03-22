<template>
    <div class="" id="formBody">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-md-10 mx-auto col-lg-5 py-5" id="form">
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
                  <div class="d-flex gap-1 mt-2">
                    <button class="w-100 btn" type="submit" @click="loginUser()">Login</button>
                  </div>
                  <hr class="my-4">
                  <small>No account?<router-link to="/signup"  class="text-white">Click here to create an account</router-link></small>
                <div id="eerTxt"></div>
              </div>
            </div>
          </div>
    </div>
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

button {
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  background-color: #21212100;
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  z-index: 2;
 }
 
 button::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background-image: conic-gradient(
     #488cfb,
     #29dbbc,
     #ddf505,
     #ff9f0e,
     #e440bb,
     #655adc,
     #488cfb
   );
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  -webkit-mask-clip: var(--m-o);
  mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
 }
 
 button:hover::after {
  animation-play-state: running;
 }
 
 @keyframes rotate-hue {
  to {
   filter: hue-rotate(1turn);
  }
 }
 
 button,
 button::after {
  box-sizing: border-box;
 }
 
 button:active {
  --border-width: 5px;
 }
    
</style>