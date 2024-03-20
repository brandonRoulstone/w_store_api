<template>
    // sort by name price 
    <div class="mt-5 pt-5">
        <h1>{{$store.state.cart}}</h1>
        <div v-for="cart in $store.state.cart" v-bind:key="cart.prodID">
            <div>
                {{ cart }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        getCart(){
            this.$store.dispatch('userCart')
        }, 
        deleteFromCart(product_id){
            this.$store.dispatch('removeFromCart', product_id)
        }
    },
    mouted(){
        this.getCart();
    }
}
</script>
<style>
    
</style>