import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products:[],
    product:[]
  },
  getters: {
  },
  mutations: {
    accessProductsData(state, payload){
      state.products = payload
    },
    accessSingleProduct(state, payload){
      state.product = payload
    }
  },
  actions: {
    async fetchProducts(context){
      const res = await axios.get('https://w-store-api.onrender.com/products')
      console.log(res.data)
      context.commit('accessProductsData', res.data)
    },
    async fetchProduct(context, id){
      const res = await axios.get(`https://w-store-api.onrender.com/products/${id}`)
      
      context.commit('accessSingleProduct', res.data)
    }
  },
  modules: {
  }
})
