import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
axios.defaults.withCredentials = true

export default createStore({
  state: {
    products:[],
    product:[],
    users: [],
    loggedUser : []
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
    accessUserIsLogged(state, payload){
      state.users = payload
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

        context.commit('accessUserIsLogged', res.data)

        console.log(res.data.user_email);

        $cookies.set('jwt',res.data.token);

        alert(res.data.msg)

        // data will be sent to the user profile view

        await router.push('/')

        // window.location.reload()

      } catch (error) {
        console.error('error has occurred')
      }
     },
     async logoutUser(){
      let cookies=$cookies.keys()
      console.log(cookies)
      $cookies.remove('jwt')
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
      window.location.reload()
     }

  },
  modules: {
  }
})
