<template>
    // sort by name price 
    <div class="mt-5 pt-5">
        <!-- <h1>{{$store.state.cartState}}</h1> -->
        <div v-for="cart in $store.state.cartState" v-bind:key="cart.product_id">
            <h1>
                {{ cart }}
            </h1>
        </div>
        <!-- <img :src="$cookies.get('cart')" alt=""> -->
        <!-- <div v-for="cartST in $store.state.cartState" v-bind:key="cartST">
            {{ cartST }}
        </div> -->
    </div>
</template>
<script>
export default {
    methods : {
        getCart(){
            this.$store.dispatch('getCart')
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