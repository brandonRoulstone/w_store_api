<template>
    <div class="mt-5 pt-5">
        <h1>Cart view</h1>
        <div v-for="cart in $store.state.cart" v-bind:key="cart.product_id">
            {{ cart }}
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        cart(){
            this.$store.dispatch('cart')
        }
    },
    mouted(){
        this.cart()
    }
}
</script>
<style>
    
</style>