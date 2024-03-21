<template>

    <div class="" id="boxLg">
        <div id="box" class="mt-5 pt-5">
            <div v-for="user in userIsLogged()" v-bind:key="user" id="user" class="mx-5 px-3">
                <div class="card mx-2 shadow" style="width: 42.4rem;">
                    <p class="card-text small text-start mx-2 my-1"><i class="fa-regular fa-circle-user fa-lg" style="color: #04ff00;"></i> Active</p>
                    <img :src="user.user_image" class="card-img-top pt-2" id="objectImg" :alt="user.user_profile">
                    <div class="card-body">
                        <h5 class="card-title fs-4">{{ user.user_profile }}</h5>
                        <p class="card-text fs-4">{{ user.user_email }}</p>
                        <div class="d-flex gap-2 justify-content-center">
                            <button class="btn btn-dark" id="button">Edit profile</button>
                            <router-link to="/products" class="btn btn-dark" id="button">My shop</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="square">
            <div class="mt-5 pt-5">

                <div id="userActivity" class="mx-5">
                    <div class="card mx-5 shadow" id="media">
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
                    <div class="card mx-5 shadow mt-3" id="media">
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

    #button {
        width: fit-content;
        display: flex;
        padding: 0.6em 1rem;
        cursor: pointer;
        gap: 0.4rem;
        font-weight: bold;
        border-radius: 10px;
        text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
        background: linear-gradient(15deg, #880088, #aa2068, #cc3f47, #de6f3d, #f09f33, #de6f3d, #cc3f47, #aa2068, #880088) no-repeat;
        background-size: 300%;
        color: #fff;
        border: none;
        background-position: left center;
        box-shadow: 0 30px 10px -20px rgba(0,0,0,.2);
        transition: background .3s ease;
    }

    #button:hover {
        background-size: 320%;
        background-position: right center;
    }

    #button:hover svg {
        fill: #fff;
    }

    #button svg {
        width: 23px;
        fill: #f09f33;
        transition: .3s ease;
    }

    @media (max-width: 990px) {
        #boxLg{
            display: flex;
            flex-direction: column;
        }

        #userActivity{
            min-width: 100% !important;
            /* flex-direction: row !important; */
        }
        #media{
            width: 620px;
        }
    }
</style>