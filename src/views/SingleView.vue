<template lang="">
    <div id="cardBody">
        <div v-for="product of $store.state.product" v-bind:key="product.product_id">
            <div id="isoParent" class="container-fluid">
                <div id="isolatedDivOne">
                     <img :src="product.product_img" :alt="product.product_name" class="img" id="imgProd"/>
                </div>
                <div id="isolatedDivTwo" class="my-5 py-5">
                    <h1 class="fw-bold">{{ product.product_name }}</h1>
                    <h3 class="fw-normal">{{ product.product_desc }}</h3>
                    <div id="stars">
                        <div class="rating">
                            <input value="5" name="rate" id="star5" type="radio">
                            <label title="text" for="star5"></label>
                            <input value="4" name="rate" id="star4" type="radio">
                            <label title="text" for="star4"></label>
                            <input value="3" name="rate" id="star3" type="radio" checked="">
                            <label title="text" for="star3"></label>
                            <input value="2" name="rate" id="star2" type="radio">
                            <label title="text" for="star2"></label>
                            <input value="1" name="rate" id="star1" type="radio">
                            <label title="text" for="star1"></label>
                          </div>
                    </div>
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

#imgProd{
    height: 500px;
}

#stars{
    display: flex;
    justify-content: center;
}

.rating:not(:checked) > input {
    position: absolute;
    appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
}

.rating:not(:checked) > label:before {
  content: '★';
  color: #ffa723;
}

.rating, label {
  color: #ffa723;
}
  
  
  
  
@media (max-width: 790px) {
    #isoParent{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
}
    
</style>