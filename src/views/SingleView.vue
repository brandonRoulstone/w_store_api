<template lang="">
    <div v-for="product of $store.state.product" v-bind:key="product.product_id">
        <img :src="product.product_img" :alt="product.product_name" />
        {{ product.product_name }}
        <!-- {{ product.product_id }} -->
        <addToCartBtn @click="addToCart(product.product_id)"/>
    </div>
</template>
<script>
import addToCartBtn from '../components/addToCartBtn.vue'
export default {
    components : {
        addToCartBtn
    },
    methods : {
        fetchProduct(product_id){
            this.$store.dispatch('fetchProduct', product_id)
        },
        addToCart(product_id, user_id){
            this.$store.dispatch('addToCart', product_id, user_id)
        }
    }
}
</script>
<style scoped>
    
</style>