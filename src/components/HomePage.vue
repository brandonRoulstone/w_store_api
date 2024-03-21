<template>
  <div id="landing">

    <div class="container pt-5">

      <h1 class="text-white display-2 fw-bold pt-5" id="animate">Hello Gamers welcome to W-Store</h1>

      <div class="d-flex justify-content-center my-2">
        <dividerCompVue />
      </div>
      


      
      <textRenderVue data-compTxt RenderContent="Welcome to W Store, your ultimate destination for premium gaming PCs and consoles. Elevate your gaming experience with top-quality hardware and unrivaled performance. Shop now and level up your game!"/>

      <router-link to="/login">

        <ButtonCompVue btnContent="login!" data-animate/>
        
      </router-link>

      <router-link to="/about">

        <ButtonCompVue btnContent="Know more" data-animate/>

      </router-link>


      <div class="d-flex justify-content-center my-2">
        <dividerCompVue />
      </div>

      
    </div>
    <div class="container mt-2 d-flex justify-content-evenly" id="mediaIconContainer" data-animate>

      <div>
        <span>
          <img src="https://cdn-images.imagevenue.com/21/e7/b2/ME17RKPL_o.png" alt="" height="50" width="50">
        </span>
        <br>
        <h5 class="lead text-white fw-bold">Quality products</h5>
      </div>

      <div>
        <span>
          <img src="https://cdn-images.imagevenue.com/c4/0c/51/ME17RKRG_o.png" alt="" height="50" width="50">
        </span>
        <br>
        <h5 class="lead text-white fw-bold">High speed Gaming</h5>
      </div>

      <div>
        <span>
          <img src="https://cdn-images.imagevenue.com/d5/86/89/ME17RKS9_o.png" alt="" height="50" width="50">
        </span>
        <br>
        <h5 class="lead text-white fw-bold">Fast delivery!</h5>
      </div>

    </div>
  </div>
</template>

<script>
import ButtonCompVue from './ButtonComp.vue';
import dividerCompVue from './dividerComp.vue';
import textRenderVue from './textRender.vue';
export default {
  props: {
    msg: String
  },
  components : {
    ButtonCompVue,
    textRenderVue,
    dividerCompVue
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
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.266) 50%, rgba(0, 0, 0, 0.329));
}

#animate{
  animation-name: onload;
  animation-duration: 0.7s;
}

[data-compTxt]{
  animation-name: onload;
  animation-duration: 1s;
  color: white !important;
  text-align: center;
}

[data-animate]{
  animation-name: onload;
  animation-duration: 1.25s;
  color: white !important;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@keyframes onload {
  from {
    opacity: 0.1;
    transform: translateY(190px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}

@media (max-width: 555px) {

  #mediaIconContainer{
    display: flex;
    flex-direction: column;
  }
}
</style>
