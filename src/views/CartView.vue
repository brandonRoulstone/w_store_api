<template>
    <div class="mt-5 pt-5">

        <div v-for="cart in $store.state.cartState" v-bind:key="cart.prodID">
            <img :src="cart.prodUrl" height="400"/>
            <div>R{{ cart.product_price }}</div>
            <div>Total price: {{ cart.total_price }}</div>
            <div>Name: {{ cart.prodName }}</div>
            <div>Quantity: {{ cart.quantity }}</div>
            <button @click="deleteFromCart(cart.prodID)">Delete</button>
        </div>

    </div>
</template>
<script>
export default {
    // { "quantity": 3, "product_price": "80000.00", "total_price": "240000.00", "prodUrl": "https://cdn-images.imagevenue.com/06/48/dc/ME17QJ8J_o.png", "prodName": "ROG gaming laptop 1TB", "prodID": 1 }
    // sort by name price 
    methods : {
        getCart(){
            this.$store.dispatch('userCart')
        }, 
        deleteFromCart(product_id){
            this.$store.dispatch('removeFromCart', product_id)
        }
    },
    mounted(){
        this.getCart();
    }
}
</script>
<style>
    
</style>