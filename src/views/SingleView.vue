<template lang="">
    <div v-for="product of $store.state.product">
        <img :src="product.product_img" :alt="product.product_name" />
        {{ product.product_name }}
    </div>
</template>
<script>
export default {
    methods : {
        fetchProduct(product_id){
            this.$store.dispatch('fetchProduct', product_id)
        }
    }
}
</script>
<style lang="">
    
</style>