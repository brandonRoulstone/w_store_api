<template>
    <div class="mt-5 pt-5">

        <div v-for="cart in $store.state.cartState" v-bind:key="cart.prodID" class="mt-3 border shadow" id="cart">
            <div id="img">
                <img :src="cart.prodUrl" height="400" width="400" loading="lazy" class="img img-fluid shadow mx-2 border bg-black p-1 my-4"/>
                <!-- <span id="qty">{{ cart.quantity }}</span> -->
            </div>
            <div id="borderLR" class="mx-3">
                <div class="fs-2 fw-bold py-3 my-3 px-4">
                    <div id="prodName"><span>Name:</span> {{ cart.prodName }}</div>
                </div>
                <div class="fs-2 py-1 my-3 px-2">
                    <div id="prodPrice"><span>Price:</span> R{{ cart.product_price }}</div>
                </div>
                <div class="fs-2 py-2 my-3 px-4 d-flex gap-2 border-top">
                    <button @click="deleteFromCart(cart.prodID)"  class="btn bg-black text-white w-100">Delete</button>
                    <router-link to="/products" class="btn bg-black text-white w-100">Still Shopping <i class="fa-solid fa-basket-shopping fa-lg" style="color: #ffffff;"></i></router-link>
                </div>
            </div>
            <div class="fs-2 py-3 my-1 px-4">
                <div class="fs-2 fw-bold py-3 my-3 px-4">
                    <div id="prodQuantity"><span>Quantity:</span>{{ cart.quantity }}</div>
                </div>
                <div id="prodTotal" class="px-2 py-1"><span>Total price:</span> R{{ cart.total_price }}</div>
                <div class="fs-2 fw-bold my-3 px-4 border-top">
                    <button class="btn bg-black text-white mx-2">Checkout</button>
                    <button class="btn bg-white shadow border text-white mx-2"><i class="fa-regular fa-heart fa-lg" style="color: #ff0000;"></i></button>
                </div>
            </div>
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


#cart{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}


#borderLR{
    border-left: 4px solid rgb(188, 13, 188);
    border-right: 4px solid rgb(188, 13, 188);
    margin-top: 20px;
    margin-bottom: 20px;
    /* margin-left: 20px; */
}

#prodTotal{
    background-color: rgb(241, 244, 244);
    /* position: absolute; */
    /* bottom: 42%; */
    border-radius: 20px;
    transition: 1s ease-in;
    box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.409);
    z-index: 2 !important;
}
/* #prodTotal::before{
    content: 'Total of the current product';
    z-index: 1 !important;
    display: none;
    background-color: powderblue;
    right: 0;
    border-radius: 20px;
    transform: scale(110%);
    transition: all 1s ease-in;
}
#prodTotal:hover:after{
    content: 'Total of the current product';
    z-index: 1 !important;
    display: block;
    background-color: powderblue;
    height: 100px;
    transition: all 1s ease-in !important;
    right: 0;
    border-radius: 20px;
} */

#prodName{
    max-width: 300px;
}




@media (max-width: 998px) {
    .cart{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    /* border: 1px solid black; */
    flex-wrap: wrap;
}
}
    
</style>