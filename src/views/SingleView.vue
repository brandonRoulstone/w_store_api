<template lang="">
    <div id="cardBody">
        <div v-for="product of $store.state.product" v-bind:key="product.product_id">
            <div id="isoParent" class="container-fluid">
                <div id="isolatedDivOne">
                     <img :src="product.product_img" :alt="product.product_name" class="img"/>
                </div>
                <div id="isolatedDivTwo" class="my-5 py-5">
                    <h1 class="fw-bold">{{ product.product_name }}</h1>
                    <h3 class="fw-normal">{{ product.product_desc }}</h3>
                    <hr class="my-3 mx-3"/>
                    <h3>R{{ product.product_price }}</h3>
                    
                    
                    <addToCartBtn @click="addToCart(product.product_id)"/>
                </div>
            </div>
        </div>
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

#cardBody{
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    padding: 30px;
}

#isoParent{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
@media (max-width: 790px) {
    #isoParent{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
}
    
</style>