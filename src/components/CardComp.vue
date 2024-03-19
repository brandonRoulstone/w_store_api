<template>

    <div id="box">

        <div class="mt-5 pt-5 px-2 w-100 container" id="searchBar">

            <input type="search" class="form-control form-control-dark mx-3 w-50" placeholder="Search..." aria-label="Search" v-model="search" @change="searchByName()">

            <!-- <div class="d-flex justify-content-center" v-for="user in $cookies.get()" v-bind:key="user">
                <a href="/profile" class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill text-decoration-none">
                    <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt="">Primary
                  </a>
            </div> -->
            <button @click="sortBy()" id="sortBy" class="mx-2">sort by price</button>
            <button  id="sortBy">Filter <i class="fa-solid fa-filter fa-lg" style="color: #000000;"></i></button>


        </div>
    
        <div class="mt-2 pt-5 px-2 container" id="cardBox">

            <div class="card m-1" style="width: 18rem;" v-for='product in searchByName() || sortBy()' v-bind:key='product.product_id'>

                <img :src="product.product_img" class="card-img-top" :alt="product.product_name" loading="lazy" id="productImg">

                <div class="card-body border-top">
    
                    <div class="card-title" id="txtHeight">
    
                      <h5>{{product.product_name}}</h5>
    
                  </div>

                  <p class="card-text">R {{product.product_price}}</p>

                  <router-link @click="fetchProduct(product.product_id)" :to="{ name: 'product', params: { productId: product.product_id }} " class="btn btn-dark"  v-if="$cookies.get('jwt')">details <i class="fa-regular fa-eye fa-sm" style="color: #ffffff;"></i></router-link>

                </div>

            </div>

        </div>
        
    </div>

</template>
<script>

export default {
    data(){
        return{
            search: ''
        }
    },
    methods : {
        fetchProducts(){
            this.$store.dispatch('fetchProducts')
        },
        searchByName(){
            let storageArr = this.$store.state.products;
            let inputX = this.search;
            let resultY = storageArr.filter(prod => {
                return prod.product_name.toLowerCase().includes(inputX.toLowerCase())
            });
            return resultY;
        },
        sortBy(){
            let products = this.$store.state.products;

            if (products) {
                products.sort((a, b) => a.product_price - b.product_price);
            }
        },
        fetchProduct(product_id){
            this.$store.dispatch('fetchProduct', product_id)
        },
        isLogged(){
            this.$store.dispatch('')
        }
    },
     mounted(){
        this.fetchProducts(),
        this.searchByName()
     }
}
</script>
<style scoped>

    #box{
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
    }

    #cardBox{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    #productImg{
        object-fit: contain !important;
        height: 300px;
    }

    #txtHeight{
        overflow: scroll;
        max-height: 45px;
    }

    @media (max-width: 580px) {
        #cardBox{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }
    #searchBar{
        display: flex;
        justify-content: center;
        flex-direction: row;
    }

    #sortBy{
        width: 20%;
        color: rgb(0, 0, 0);
        font-weight: 700;
        background-color: rgba(7, 7, 7, 0);
        border-radius: 5px;
        border: 1px solid black;
    }
</style>