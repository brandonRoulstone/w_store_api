<template>
  <NavbarcompVue />
  <LoaderCompVue />
  <router-view/>
  <div class="d-flex justify-content-center">
    <FooterCompVue />
  </div>
</template>


<script>
import FooterCompVue from './components/FooterComp.vue';
import LoaderCompVue from './components/LoaderComp.vue';
import NavbarcompVue from './components/Navbarcomp.vue';
export default {
  components : {
    NavbarcompVue,
    FooterCompVue,
    LoaderCompVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
::-webkit-scrollbar{
  width: 0px !important;
}
</style>
