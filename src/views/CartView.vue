<template>
    <div class="mt-5 pt-5" v-if="$cookies.get('jwt')">

        <div class="d-flex justify-content-center">
            <input type="search" class="form-control form-control-dark mx-3 w-50 mb-2" placeholder="Search..." aria-label="Search" v-model="search" @change="searchByName()">
        </div>
        <div class="d-flex justify-content-center gap-1 container">

            <button @click="sortBy()" id="sortBy" class="btn bg-black text-white"><i class="fa-solid fa-arrow-down-up-across-line fa-lg" style="color: #ffffff;"></i> Sort</button>
            
            <router-link to="/products" class="btn bg-black text-white" id="router"><i class="fa-solid fa-basket-shopping fa-lg" style="color: #ffffff;"></i> Continue shopping</router-link>
            <button type="button" class="btn bg-black text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-regular fa-user fa-lg" style="color: #ffffff;"></i> Your profile
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-regular fa-user fa-lg px-3" style="color: #000000;"></i><i class="fa-regular fa-user fa-lg" style="color: #ffffff;"></i>Your profile </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="">
                                <UserProfile />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn bg-black text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-regular fa-heart fa-lg" style="color: #ffffff;"></i> Your favourites</button>
        </div>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Favourites <i class="fa-regular fa-heart fa-sm" style="color: #ff0000;"></i></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" v-for="i in getfavs()" v-bind:key="i.prodID" id="scroll">
                <p>{{ i.prodName }}</p>
                <img :src="i.prodUrl" height="50" width="50" loading="lazy" class="img img-fluid shadow mx-2 border p-1 my-4"/>
            </div>
        </div>

        <div v-for="cart in searchByName() || sortBy()" v-bind:key="cart.prodID" class="mt-3" id="cart">
            <div id="img" class="container">
                <img :src="cart.prodUrl" height="200" width="200" loading="lazy" class="img img-fluid shadow mx-2 border p-1 my-4"/>
            </div>
            <div id="borderLR" class="mx-3 container">
                <div class="fw-bold py-3 my-3 px-4">
                    <div id="prodName"><span>Name:</span> {{ cart.prodName }}</div>
                </div>
                <div class="py-1 my-3 px-2">
                    <div id="prodPrice"><span>Price:</span> R{{ cart.product_price }}</div>
                </div>
                <div class="py-2 my-3 px-4 d-flex gap-2 border-top">
                    <button @click="addToFavs(cart)" class="btn bg-white shadow border text-white" :title="'add ' + cart.prodName + ' to favourites'"><i class="fa-regular fa-heart fa-lg fa-beat" style="color: #ff0000;"></i></button>
                    <button @click="deleteFromCart(cart.prodID)"  class="btn bg-black text-white w-100">Decrease quantity</button>
                </div>
            </div>
            <div class="py-3 my-1 px-4">
                <div class="fw-bold py-3 my-3 px-4">
                    <div id="prodQuantity"><span>Quantity:</span>{{ cart.quantity }}</div>
                </div>
                <div id="prodTotal" class="px-2 py-1"><span>Total price:</span> R{{ cart.total_price }}</div>
            </div>
        </div>  

    </div>

    <div v-else id="FourOFour" class="container-fluid">
        <h1 class="display-1">403 Forbidden</h1>
    </div>
</template>
<script>
    import UserProfile from './UserProfile.vue'
export default {
    // sort by name price 
    data(){
        return {
            Userfavourites: [],
            search : ''
        }
    },
    components : {
        UserProfile
    },
    methods : {
        getCart(){
            this.$store.dispatch('userCart')
        }, 
        deleteFromCart(product_id){
            this.$store.dispatch('removeFromCart', product_id)
        },
        async addToFavs(favz){
            let storage = this.Userfavourites
            const fvs = storage.push(favz)
            console.log(fvs);
            console.log(storage);
            const data = JSON.stringify(storage)
            await swal(`You just liked a product`, `The product you liked has been saved`, "success");
            localStorage.setItem('favs', data)
            window.location.reload()
        },
        getfavs(){
            let favs = JSON.parse(localStorage.getItem("favs")) || [];
            return favs
        },
        searchByName(){
            let storageArr = this.$store.state.cartState;
            let inputX = this.search;
            let resultY = storageArr.filter(cart => {
                return cart.prodName.toLowerCase().includes(inputX.toLowerCase())
            });
            return resultY;
        },
        sortBy(){
            let inCart = this.$store.state.cartState;

            if (inCart) {
                inCart.sort((a, b) => a.product_price - b.product_price);
            }
        },
    },
    mounted(){
        this.getCart();
        this.getfavs();
    }
}
</script>
<style>


#cart{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    border-left: 10px solid purple;
}

#cart:hover{
    border-left: 10px solid rgb(0, 149, 242);
    transition: all 0.2s ease-in-out;
}

#scroll{
    max-height: 100vh;
    overflow: scroll;
}

#borderLR{
    /* border-left: 4px solid rgb(188, 13, 188);
    border-right: 4px solid rgb(188, 13, 188); */
    margin-top: 20px;
    margin-bottom: 20px;
    /* margin-left: 20px; */
}

#prodTotal{
    background-color: whitesmoke;
    border-radius: 20px;
    transition: 1s ease-in;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.211);
    z-index: 2 !important;
}

#FourOFour{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}


@media (max-width: 998px) {
    #cart{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        border: none;
    }
}
@media (max-width: 558px) {
    #router,div, button, i{
        font-size: 12px !important;
    }
}
@media (max-width: 358px) {
    #router,div, button, i{
        font-size: 10px !important;
    }
}
@media (max-width: 301px) {
    #router,div, button{
        font-size: 8px !important;
    }
    i{
        font-size: 10px !important;
    }
}
    
</style>