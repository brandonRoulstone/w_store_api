<template>
    <div class="mt-5 pt-5">

        <div v-for="cart in getCart()" v-bind:key="cart.prodID">
            <img :src="cart.prodUrl" height="400" width="400"/>
            <div>R{{ cart.product_price }}</div>
            <div>Total price: {{ cart.total_price }}</div>
            <div>Name: {{ cart.prodName }}</div>
            <div>Quantity: {{ cart.quantity }}</div>
            <button @click="deleteFromCart(cart.prodID)">Delete</button>
        </div>

        <h1>{{ $store.state.cart }}</h1>

        
    </div>
</template>
<script>
    import axios from 'axios';
export default {
    // { "quantity": 3, "product_price": "80000.00", "total_price": "240000.00", "prodUrl": "https://cdn-images.imagevenue.com/06/48/dc/ME17QJ8J_o.png", "prodName": "ROG gaming laptop 1TB", "prodID": 1 }
    // sort by name price 
    methods : {
        getCart(product_id){
            this.$store.dispatch('userCart', product_id)
        }, 
        deleteFromCart(product_id){
            this.$store.dispatch('removeFromCart', product_id)
        }
    },
    mouted(){
        this.getCart($cookies.get('userId'));
    }
}
</script>
<style>
    
</style>