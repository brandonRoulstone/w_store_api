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

        await swal(`Server down or route does not exist`, "try again", "error");

      }
    },
    async fetchProduct(context, id){

      try {

        const res = await axios.get(`https://w-store-api.onrender.com/products/${id}`)
      
        context.commit('accessSingleProduct', res.data)

      } catch (error) {

        console.error('error has occurred')

        const res = await axios.get(`https://w-store-api.onrender.com/products/${id}`)

        await swal(`${res.data.msg}`, "try again", "error");

      }

    },
    async deleteProduct(context, product_id){

      try {
        const res = await axios.delete(`https://w-store-api.onrender.com/products/${product_id}`);

        await swal(`Deleted product!`, "You have deleted a product", "success");

        window.location.reload()

      } catch (error) {

        await swal(`Product was not found`, "try again", "error");

      }

    },
    async SignUser(context, userpayload){

      try {
        const res = await axios.post(`https://w-store-api.onrender.com/users`, userpayload)

        await swal(`Welcome to W-store ${userpayload.user_profile}!`, "You have successfully created an acccount", "success");

        await router.push('/login')

        window.location.reload()

      } catch (error) {

        console.error('error has occurred')

        await swal(`Invalid information`, "Please try again", "error");

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

        await swal(`Hi ${u.user_profile} your details are incorrect`, "Please try again", "error");

      }

    },
    async logoutUser(){

      try {
        
        const res = await axios.delete(`https://w-store-api.onrender.com/logout`)

        $cookies.remove('jwt')
  
        $cookies.remove('refreshToken')
  
        $cookies.remove('role')
  
        $cookies.remove('userId')
  
        localStorage.removeItem('activeUser')
  
        await swal(`You have ${res.data.msg}`, "Goodbye! come shop soon", "success");
  
        await router.push('/')
  
        window.location.reload()

      } catch (error) {

        await swal(`Oops!`, "Please try again", "error");

      }

    },

    async getUsers(context){
      try {

        const res = await axios.get(`https://w-store-api.onrender.com/users`)

        context.commit('accessUsers', res.data)

        console.log(res.data)

      } catch (error) {

        if (error.response && error.response.status === 401) {

          await swal(`Invalid credentials`, "Please try again", "warning");

        }
      }
    },

    async getUser(context, id){

      try {

        const res = await axios.get(`https://w-store-api.onrender.com/users/${id}`);

        context.commit('accessUser', res.data);

      } catch (error) {

        console.error('something went wrong')

      }

    },

    async adminAuth(context){

      try {

        const res = await axios.get(`https://w-store-api.onrender.com/users`)

        console.log(res.data)

        context.commit('accessUserIsLogged', res.data)

      } catch (error) {

        console.error('something went wrong')

      }
    },

    async deleteUser(context, user_id){
      try {

        const res = await axios.delete(`https://w-store-api.onrender.com/users/${user_id}`);

        await swal(`Successfully deleted`, `You have successfuly deleted`, "success");
      
        window.location.reload();

      } catch (error) {
        await swal(`User maybe does not exist`, `Check if user still exists`, "error");
      }
    },

    async updateUser(context, update){

      try {
        const res = await axios.patch(`https://w-store-api.onrender.com/users/${update.user_id}`, update);

        await swal(`Successfully updated`, `You have successfuly updated  ${res.data.user_profile}`, "success");

        window.location.reload();

      } catch (error) {

        await swal(`Rejected by database`, `You might have exceed the amount of characters(255)`, "error");

      }

    },

    async addNewUser(context, adminPayload){
      try {
        const res = await axios.post(`https://w-store-api.onrender.com/users`, adminPayload);

        await swal(`Successfully added`, `You have successfuly added ${res.data.product_name} to database`, "success");

        window.location.reload()

      } catch (error) {

        await swal(`Rejected by database`, `You might have exceed the amount of characters(255)`, "error");

      }
    },

    async updateProducts(context, update){
      try {

        const res = await axios.patch(`https://w-store-api.onrender.com/products/${update.product_id}`, update);

        await swal(`Successfully updated`, `You have successfuly updated product no.${update.product_id}`, "success");

        window.location.reload();

      } catch (error) {

        await swal(`Rejected by database`, `You might have exceed the amount of characters(255)`, "error");

      }
    },

    async addProduct(context, userpayload){
      try {
        const res = await axios.post(`https://w-store-api.onrender.com/products`, userpayload);

        console.log(res.data);

        await swal(`You added a user to the database`, `You have successfuly added a product`, "success");

        window.location.reload();

      } catch (error) {

        await swal(`Unable to add product`, "Check if you filled in all inputs", "error");

      }
    },

    async addToCart(context,userValidity){

      try {
        const res = await axios.post(`https://w-store-api.onrender.com/cart/${userValidity}?user_id=${$cookies.get('userId')}`,userValidity);

        console.log(`https://w-store-api.onrender.com/cart/${$cookies.get('userId')}`)
  
        context.commit('addProd', res.data)

        await swal(`Successfully added to cart`, `You have items in your cart now`, "success");

      } catch (error) {

        await swal(`Unable to add product to cart`, "this product must've been taken down or does not exist", "error");

      }

    },

    async getCart(context){

      try {
        const res = await axios.get(`https://w-store-api.onrender.com/cart`);
      } catch (error) {

        await swal(`Unable to get products from cart`, "try to log in first", "error");
        
      }
      
    },

    async removeFromCart(context, TargProd){

      try {

        const res = axios.delete(`https://w-store-api.onrender.com/cart/${TargProd}?user_id=${$cookies.get('userId')}`);

        console.log(TargProd, `https://w-store-api.onrender.com/cart/${TargProd}?user_id=${$cookies.get('userId')}`)
  
        window.location.reload();

      } catch (error) {

        await swal(`Unable to remove from cart`, "try again", "error");

      }

    },

    async userCart(context){

      try {

        const res = await axios.get(`https://w-store-api.onrender.com/cart/${$cookies.get('userId')}`);

        let allData = res.data.products;
  
        context.commit('addProd', allData);

      } catch (error) {

        console.error('error you probably not logged in!');

        await swal(`Invalid credentials`, "error you probably not logged in!", "warning");

      }

    }

  },
  modules: {
  }
})
