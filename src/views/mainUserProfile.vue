<template>

    <div class="" id="boxLg">
        <div id="box" class="mt-5 pt-5">
            <div v-for="user in userIsLogged()" v-bind:key="user" id="user">
                <div class="card mx-2 shadow" style="width: 42.4rem;">
                    <p class="card-text small text-start mx-2 my-1"><i class="fa-regular fa-circle-user fa-lg" style="color: #04ff00;"></i> Active</p>
                    <img :src="user.user_image" class="card-img-top pt-2" id="objectImg" :alt="user.user_profile">
                    <div class="card-body">
                        <h5 class="card-title fs-4">{{ user.user_profile }}</h5>
                        <p class="card-text fs-4">{{ user.user_email }}</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-dark w-100">Edit profile</button>
                            <router-link to="/products" class="btn btn-dark w-100">My shop</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="square">
            <div class="mt-5 pt-5">

                <div id="userActivity" class="mx-5">
                    <div class="card mx-5 shadow">
                        <h5 class="card-header text-start">Subscriptions</h5>
                        <div class="card-body">
                            <!-- <div class="card-title">Special title treatment</div> -->
                            <p class="card-text text-start"><i class="fa-solid fa-truck-fast fa-lg mx-2" style="color: #FFD43B;"></i> Super Shipping</p>
                            <p class="card-text text-start"><i class="fa-regular fa-star fa-lg mx-2" style="color: #FFD43B;"></i> Premium client</p>
                            <p class="card-text text-start"><i class="fa-solid fa-w fa-lg mx-2" style="color: #B197FC;"></i> W-store ULTRA</p>
                            <hr />
                            <p class="card-text text-center text-black-50">These are your lifetime subscriptions at W-store inc. these subscriptions are given to users as a Thank you! for choosing us</p>
                        </div>
                    </div>
                    <div class="card mx-5 shadow mt-3">
                        <h5 class="card-header text-start">Manage cart</h5>

                        <div class="small" v-if="$store.state.cartState.length > 0">
                            scroll here <i class="fa-solid fa-arrow-down fa-sm" style="color: #000000;"></i>
                        </div>
                        <div class="small" v-else>
                            <router-link to='/cart'>nothing in cart</router-link>
                        </div>

                        <div id="overflow">

                            <div class="card-body" v-for="cart in $store.state.cartState" v-bind:key="cart.prodID">
                                <p class="card-text text-start fw-bold">{{ cart.prodName }}</p>
                                <p class="card-text text-start"><i class="fa-solid fa-credit-card fa-lg" style="color: #B197FC;"></i> Premium client</p>
                                <p class="card-text text-start"><i class="fa-solid fa-truck-fast fa-lg" style="color: #FFD43B;"></i> 1 day shipping</p>
                            </div>

                        </div>
                        <div class="d-flex justify-content-center">
                            <router-link to='/cart' class="btn bg-black text-white w-50 mb-1"><span class="quan">{{ $store.state.cartState.length }}</span> items in cart</router-link>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        userIsLogged(){
            let users = JSON.parse(localStorage.getItem("activeUser")) || [];
            return users
        },
        getCart(){
            this.$store.dispatch('userCart');
        }
    },
    mounted() {
        this.userIsLogged();
        this.getCart();
    },
}
</script>
<style scoped>
    #boxLg{
        display: flex;
    }
    #box{
        display: flex;
        justify-content: start;
    }

    .quan{
        background-color: red;
        padding: 0.2em;
        border-radius: 50%;
    }

    #overflow{
        overflow-y: scroll !important;
        max-height: 150px !important;
    }

    ::-webkit-scrollbar {
        width: 5px !important;
        height: 4px;
    }
  
     /* Track */
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 1px;
        scroll-behavior: smooth;
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgb(0, 0, 0); 
    }
    
      /* triggers when page is inactive */
    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(56, 54, 54, 0.632); 
    }

    #user{
        display: flex;
        flex-direction: row;
    }

    #userCol{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    #overflow{
        max-width: 390px;
        overflow-x: scroll;
    }

    #text{

        text-align: justify;
    }

    #objectImg{
        object-fit: contain;
        height: 300px;
    }
</style>