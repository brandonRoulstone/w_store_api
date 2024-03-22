<template>

    <div id="box">

        <div class="mt-5 pt-5 px-2 w-100 container" id="searchBar">

            <input type="search" class="form-control form-control-dark mx-3 w-50" placeholder="Search by categoies or product names" aria-label="Search" v-model="search" @change="searchByName()">
            <!-- <button @click="sortBy()" id="sortBy" class="mx-2">sort by price</button> -->
            <!-- <button @click="sortByPcs()" id="sortBy" class="mx-2">Gaming Desktop PC</button> -->
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-filter fa-lg" style="color: #000000;"></i> Filter
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" @click="sortBy()">Low to high</a></li>
                    <li><a class="dropdown-item" @click="HightToLow()">High to low</a></li>
                </ul>
            </div>


        </div>
    
        <div class="mt-2 pt-5 px-2 container" id="cardBox">

            <div class="card m-1" id="cardBody" style="width: 18rem;" v-for='product in searchByName() || sortBy() || HightToLow()' v-bind:key='product.product_id'>

                <img :src="product.product_img" class="card-img-top" :alt="product.product_name" loading="lazy" id="productImg">

                <div class="card-body border-top">
    
                    <div class="card-title" id="txtHeight">
    
                      <h5>{{product.product_name}}</h5>
    
                    </div>

                    <p class="card-text">R {{product.product_price}}</p>
                    
                    <p class="card-text">
                      category :
                      {{product.product_category}}
                    </p>

                  <router-link @click="fetchProduct(product.product_id)" :to="{ name: 'product', params: { productId: product.product_id }} " class="btn btn-dark"  v-if="$cookies.get('jwt')">details <i class="fa-regular fa-eye fa-sm" style="color: #ffffff;"></i></router-link>
                  <router-link to="/login" class="regText" v-else>Click here to Log in or register first!</router-link>

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
                return prod.product_name.toLowerCase().includes(inputX.toLowerCase()) || prod.product_category.toLowerCase().includes(inputX.toLowerCase()) 
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
        },
        HightToLow(){
            let products = this.$store.state.products;

            if (products) {
                products.sort((a, b) => b.product_price - a.product_price );
            }

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

    #productImg:hover{
        transition: all 1s ease-in-out;
        border-image: fill 0 linear-gradient(rgb(249, 249, 249), rgb(140, 79, 215), rgb(249, 249, 249));
        transition: all 1s ease-in-out;
    }

    #cardBody:hover{
        color: blueviolet;
    }

    .regText{
        text-decoration: none;
        color: rgb(0, 8, 255);
    }

    #productImg{
        object-fit: contain !important;
        height: 300px;
    }

    #txtHeight{
        overflow: scroll;
        max-height: 45px;
    }

    @media (max-width: 990px) {
        #cardBox{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
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