import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
import swal from 'sweetalert';
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products:[],
    product:[],
    users: [],
    user: [],
    loggedUser: [],
    cart: [],
    cartState: []
  },
  getters: {
  },
  mutations: {
    accessProductsData(state, payload){
      state.products = payload
    },
    accessSingleProduct(state, payload){
      state.product = payload
    },
    accessUsers(state, payload){
      state.users = payload
    },
    accessUser(state, payload){
      state.user = payload
    },
    accessUserIsLogged(state, payload){
      state.loggedUser = payload
    },
    accessCart(state, payload){
      state.cart = payload
    },
    addProd(state, payload){
      state.cartState = payload
    }
    
  },
  actions: {
    async fetchProducts(context){
      try {
        const res = await axios.get('https://w-store-api.onrender.com/products')
        console.log(res.data)
        context.commit('accessProductsData', res.data)
      } catch (error){
        console.error('error has occurred')
      }
    },
    async fetchProduct(context, id){
      try {
        const res = await axios.get(`https://w-store-api.onrender.com/products/${id}`)
      
        context.commit('accessSingleProduct', res.data)
      } catch (error) {
        console.error('error has occurred')
      }
    },
    async deleteProduct(context, product_id){
      const res = await axios.delete(`https://w-store-api.onrender.com/products/${product_id}`);
      window.location.reload()
    },
     async SignUser(context, userpayload){
      try {
        const res = await axios.post(`https://w-store-api.onrender.com/users`, userpayload)
        alert(`Your account has been successfully created ${res.data.user_profile}!`)
        window.location.reload()
      } catch (error) {
        console.error('error has occurred')
      }
     },
     async loginUser(context, userInfoIsValid){
      try {

        const res = await axios.post(`https://w-store-api.onrender.com/login`, userInfoIsValid)
        
        $cookies.set('jwt',res.data.token);

        $cookies.set('refreshToken',res.data.refreshToken);

        $cookies.set('role', res.data.role);

        const [u] = res.data.isLogged

        $cookies.set('userId', u.user_id)
        
        const user = res.data.isLogged;
        
        const storage = JSON.stringify(user)
        
        localStorage.setItem('activeUser', storage)
        
        await swal(`Welcome back ${u.user_profile}`, "You have logged in successfully", "success");

        await router.push('/profile')
        
        window.location.reload()

      } catch (error) {

        console.error('error has occurred')

      }
     },
     async logoutUser(){

      const res = await axios.delete(`https://w-store-api.onrender.com/logout`)

      $cookies.remove('jwt')

      $cookies.remove('refreshToken')

      $cookies.remove('role')

      $cookies.remove('userId')

      localStorage.removeItem('activeUser')

      await swal(`You have ${res.data.msg}`, "Goodbye! come shop soon", "success");

      await router.push('/')

      window.location.reload()
     },

     async getUsers(context){
      try {
        const res = await axios.get(`https://w-store-api.onrender.com/users`)
        context.commit('accessUsers', res.data)
        console.log(res.data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Invalid credentials");
        } else {
          console.error('An error occurred:', error);
        }
      }
     },
     async getUser(context, id){
      const res = await axios.get(`https://w-store-api.onrender.com/users/${id}`)
      context.commit('accessUser', res.data)
     },
      async adminAuth(context){
        try {
          const res = await axios.get(`https://w-store-api.onrender.com/users`)
          console.log(res.data)
          context.commit('accessUserIsLogged', res.data)
        } catch (error) {

        }
      },
     async deleteUser(context, user_id){
      const res = await axios.delete(`https://w-store-api.onrender.com/users/${user_id}`)
      window.location.reload()
     },
     async updateUser(context, update){
      const res = await axios.patch(`https://w-store-api.onrender.com/users/${update.user_id}`, update)
      window.location.reload()
     },
     async addNewUser(context, adminPayload){
      console.log(adminPayload)
      const res = await axios.post(`https://w-store-api.onrender.com/users`, adminPayload);
      window.location.reload()
     },
     async updateProducts(context, update){
      const res = await axios.patch(`https://w-store-api.onrender.com/products/${update.product_id}`, update);
      window.location.reload();
     },
     async addProduct(context, userpayload){
      const res = await axios.post(`https://w-store-api.onrender.com/products`, userpayload);
      console.log(res.data);
      window.location.reload();
     },
     async addToCart(context,userValidity){

      const res = await axios.post(`https://w-store-api.onrender.com/cart/${userValidity}?user_id=${$cookies.get('userId')}`,userValidity);

      // const prodTarg = res.data.product;

      context.commit('addProd', res.data)

      // $cookies.set('cart', prodTarg)

      // console.log(prodTarg);

     },
     async getCart(context){

      const res = await axios.get(`https://w-store-api.onrender.com/cart`);

      context.commit('accessCart', res.data)
      
     },
      async removeFromCart(context, TargProd){

        const res = axios.delete(`https://w-store-api.onrender.com/cart/${TargProd}`);

        // localStorage.removeItem('cartKey');

      }

  },
  modules: {
  }
})
