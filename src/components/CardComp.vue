<template>

    <div id="box">

        <div class="mt-5 pt-5 px-2" id="searchBar">

            <input type="search" class="form-control form-control-dark mx-3" placeholder="Search..." aria-label="Search" v-model="search" @change="searchByName()">

            <button @click="sortBy()" id="sortBy">sort</button>

        </div>
    
        <div class="mt-2 pt-5 px-2 container" id="cardBox">

            <div class="card m-1 d-flex" style="width: 18rem;" v-for='product in searchByName() || sortBy()' v-bind:key='product.product_id'>

                <img :src="product.product_img" class="card-img-top" :alt="product.product_name" loading="lazy" id="productImg">

                <div class="card-body border-top">
    
                    <div class="card-title" id="txtHeight">
    
                      <h5>{{product.product_name}}</h5>
    
                  </div>

                  <p class="card-text">R {{product.product_price}}</p>

                  <router-link @click="fetchProduct(product.product_id)" :to="{ name: 'product', params: { productId: product.product_id }} " class="btn btn-dark">details <i class="fa-regular fa-eye fa-sm" style="color: #ffffff;"></i></router-link>

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
        max-height: 23px;
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
        color: white;
        background-color: green;
        border-radius: 5px;
        border: none;
    }
</style>