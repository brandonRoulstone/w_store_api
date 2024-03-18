import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products:[],
    product:[],
    users: [],
    user: [],
    loggedUser: [],
    cart: []
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
     async SignUser(context, userpayload){
      try {
        const res = await axios.post(`https://w-store-api.onrender.com/register`, userpayload)
        alert(`Your account has been created ${res.data.user_profile}!`)
        window.location.reload()
      } catch (error) {
        console.error('error has occurred')
      }
     },
     async loginUser(context, userInfoIsValid){
      try {

        const res = await axios.post(`https://w-store-api.onrender.com/login`, userInfoIsValid)

        console.log(res.data.role);
        
        console.log(res.data.refreshToken);

        $cookies.set('jwt',res.data.token);

        $cookies.set('refreshToken',res.data.refreshToken);

        $cookies.set('role', res.data.role);

        alert(res.data.msg)

        // data will be sent to the user profile view

        await router.push('/')

        window.location.reload()

      } catch (error) {
        console.error('error has occurred')
      }
     },
     async logoutUser(){

      $cookies.remove('jwt')

      $cookies.remove('refreshToken')

      $cookies.remove('role')

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
      console.log(update.user_id)
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
      window.location.reload()
     },
     async addProduct(context, userpayload){
      const res = await axios.post(`https://w-store-api.onrender.com/products`, userpayload)
      console.log(res.data);
      window.location.reload()
     },
     async addToCart(context,userValidity){
      // returned raw data into query for testing
      const res = await axios.post(`https://w-store-api.onrender.com/cart/${userValidity}?user_id=3`,userValidity)
      // context.commit('accessCart', userValidity)
     },
     async getCart(context){
      const res = await axios.get(`https://w-store-api.onrender.com/cart`)
      context.commit('accessCart', res.data)
     }

  },
  modules: {
  }
})
