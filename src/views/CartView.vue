<template>
    <div class="mt-5 pt-5">
        <h1>{{ $store.state.cart }}</h1>
        <div v-for="cart in getCart()" v-bind:key="cart.cart_id">
            {{ cart }}
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        getCart(){
            this.$store.dispatch('getCart')
        }
    },
    mouted(){
        this.getCart()
    }
}
</script>
<style>
    
</style>