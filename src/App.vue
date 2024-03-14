<template>
  <NavbarcompVue />
  <router-view/>
</template>


<script>
import NavbarcompVue from './components/Navbarcomp.vue';
export default {
  components : {
    NavbarcompVue
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
