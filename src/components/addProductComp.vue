<template>

    <div class="p-5 mt-5">
        

    
    
        <div class="mt-3" id="boxXD">
    
          <h1>Add a product</h1>
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping" v-if="product_name.length === 0"><i class="fa-solid fa-tags fa-xl" style="color: #ff0000;"></i></span>
            <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-tags fa-xl" style="color: #11ff00;"></i></span>
            <input type="text" class="form-control" placeholder="product_name" aria-label="product_name" aria-describedby="addon-wrapping" v-model="product_name">
          </div>
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping" v-if="product_desc.length === 0"><i class="fa-solid fa-pencil fa-xl" style="color: #ff0000;"></i></span>
            <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-pencil fa-xl" style="color: #11ff00;"></i></span>
            <input type="text" class="form-control" placeholder="product_desc" aria-label="product_desc" aria-describedby="addon-wrapping" v-model="product_desc">
          </div>
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping" v-if="product_price.length === 0"><i class="fa-solid fa-dollar-sign fa-xl" style="color: #ff0000;"></i></span>
            <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-dollar-sign fa-xl" style="color: #11ff00;"></i></span>
            <input type="text" class="form-control" placeholder="product_price" aria-label="product_price" aria-describedby="addon-wrapping" v-model="product_price">
          </div>
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping" v-if="product_img.length === 0"><i class="fa-solid fa-image fa-xl" style="color: #ff0000;"></i></span>
            <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-regular fa-image fa-xl" style="color: #11ff00;"></i></span>
            <input type="text" class="form-control" placeholder="product_image" aria-label="product_image" aria-describedby="addon-wrapping" v-model="product_img">
          </div>
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping" v-if="product_category.length === 0"><i class="fa-solid fa-list fa-xl" style="color: #ff0000;"></i></span>
            <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-list fa-xl" style="color: #11ff00;"></i></span>
            <input type="text" class="form-control" placeholder="product_category" aria-label="product_category" aria-describedby="addon-wrapping" v-model="product_category">
          </div>
          <button class="btn btn-outline-dark" v-if="product_img.length === 0 || product_name.length === 0 || product_price.length === 0 || product_desc.length === 0 || product_category.length === 0" disabled>fill in all input fields</button>
          <button @click="addProduct()" class="btn btn-outline-primary" v-else>Add product to Database <i class="fa-solid fa-database fa-bounce fa-xl" style="color: blue;"></i></button>
          <div id="errOnInput"></div>
        </div>
    </div>
    
</template>
<script>
export default {

    data(){
        return{
            //products:
            product_name : '',
            product_desc : '',
            product_price : '',
            product_img: '',
            product_category : ''
        }
    },
    methods : {
      async addProduct(){
        console.log(this.$data);
        this.$store.dispatch('addProduct', this.$data);
      },
    }
    
}
</script>
<style scoped>

#tableBody{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
}


#products{
    display: flex;
    overflow-x: scroll;
    align-items: center;
}

#productImg{
    object-fit: contain !important;
    height: 300px;
}

#textOve{
    max-height: 56px;
    overflow: scroll;
}

::-webkit-scrollbar {
    width: 5px !important;
    height: 4px;
  }
  
  /* Track */
::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.368);  */
    -webkit-border-radius: 1px;
    scroll-behavior: smooth;
    border-radius: 5px;
  }
  
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgb(0, 0, 0); 
    /* -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);  */
  }
  
  /* triggers when page is inactive */
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(56, 54, 54, 0.632); 
  }

#container{
    display: flex !important;
    align-items: center;
    overflow-x: scroll;
}

  #card{
    display: flex !important;
  }

  #userImg{
    object-fit: contain;
    scale: 60%;
    height: 150px;
    border-radius: 50%;
    border: 1px solid black;
  }



  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px){

}
    
</style>