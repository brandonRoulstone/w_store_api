<template>

<div class="p-5 mt-5" v-if="$cookies.get('role') === 'admin'">
  <!-- <div class="d-flex justify-content-start">
    <input type="search" class="form-control form-control-dark w-50 mb-2" placeholder="Search..." aria-label="Search" v-model="search" @change="searchByName()">
  </div> -->

  <div id="products" class="gap-4">
    <div v-for="product in $store.state.products" v-bind:key="product.product_id">
      <div class="card" style="width: 18rem;">
        <img :src="product.product_img" class="card-img-top" :alt="product.product_name" loading="lazy" id="productImg">
        <div class="card-body">
          <h5 class="card-title">{{product.product_name}}</h5>
          <p class="card-text">R{{product.product_price}}</p>
          <p class="card-text" id="textOve">{{product.product_desc}}</p>
          <button @click="deleteProduct(product.product_id)" class="btn btn-danger mx-1"><i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i></button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + product.product_id">
            update
          </button>
                
          <div class="modal fade" :id="'staticBackdrop' + product.product_id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Update product {{product.product_id}}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="input-group flex-nowrap mb-2">
                    <span class="input-group-text" id="addon-wrapping">Username</span>
                    <input type="text" class="form-control" placeholder="Product name" aria-label="Username" aria-describedby="addon-wrapping" v-model="product_name">
                  </div>
                  <div class="input-group flex-nowrap mb-2">
                    <span class="input-group-text" id="addon-wrapping">Product description</span>
                    <input type="text" class="form-control" placeholder="Product description" aria-label="Username" aria-describedby="addon-wrapping" v-model="product_desc">
                  </div>
                  <div class="input-group flex-nowrap mb-2">
                    <span class="input-group-text" id="addon-wrapping">Product price</span>
                    <input type="text" class="form-control" placeholder="Product price (R)" aria-label="Username" aria-describedby="addon-wrapping" v-model="product_price">
                  </div>
                  <div class="input-group flex-nowrap mb-2">
                    <span class="input-group-text" id="addon-wrapping">Product category</span>
                    <input type="text" class="form-control" placeholder="Product category" aria-label="Username" aria-describedby="addon-wrapping" v-model="product_category">
                  </div>
                  <div class="input-group flex-nowrap mb-2">
                    <span class="input-group-text" id="addon-wrapping">Product image</span>
                    <input type="text" class="form-control" placeholder="Product image" aria-label="Username" aria-describedby="addon-wrapping" v-model="product_img">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateProduct(product.product_id)">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  <h1 class="mt-5 pt-5">Manage users</h1>
  <div id="container">
    <div class="mx-4" v-for="user in $store.state.users" v-bind:key="user.user_id">

      <div class="" id="card" style="width: 18rem;">
        <router-link @click="getUser(user.user_id)" :to="{ name: 'admi', params: { userId: user.user_id }}" class="card-img-top">
          <img :src="user.user_image" :alt="user.user_profile" id="userImg">
        </router-link>
        <div class="card-body">

          <h5 class="card-title">{{ user.user_profile }}</h5>

          <p class="card-text">{{ user.user_email }}</p>
          <p class="card-text">{{ user.user_role }}</p>
          <!-- <p class="card-text">{{ user.user_password }}</p> -->
          <div class="d-flex justify-content-evenly">
            <!-- <router-link @click="getUser(user.user_id)" :to="{ name: 'admi', params: { userId: user.user_id }}" class="btn btn-dark">User deets</router-link> -->
            <button type="button" class="btn btn-primary mx-1" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + user.user_id">
              update
            </button>
                  
            <!-- Modal -->
            <div class="modal fade" :id="'exampleModal'+user.user_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{user.user_id}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping">Username</span>
                      <input type="text" class="form-control" placeholder="user_name" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_profile">
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping">Email</span>
                      <input type="text" class="form-control" placeholder="user_email" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_email">
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping">Role</span>
                      <input type="text" class="form-control" placeholder="user_role" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_role">
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text bg-warning" id="addon-wrapping">User password</span>
                      <input type="text" class="form-control" placeholder="Cannot see or update user password!" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_password" readonly>
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span class="input-group-text" id="addon-wrapping">Profile image</span>
                      <input type="text" class="form-control" placeholder="user_image" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_image">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary" @click="updateUser(user.user_id)">Save changes to {{user.user_profile}}</button>
                  </div>
                </div>
              </div>
            </div>
             <button class="btn btn-danger" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i></button>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="container mt-3">
    <h1>Add a user!</h1>
    <div id="boxXD">
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping" v-if="user_profile.length === 0"><i class="fa-solid fa-user fa-xl" style="color: #ff0000;"></i></span>
        <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-user fa-xl" style="color: #11ff00;"></i></span>
        <input type="text" class="form-control" placeholder="user_name" aria-label="user_name" aria-describedby="addon-wrapping" v-model="user_profile" required>
      </div>
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping" v-if="user_email.length === 0"><i class="fa-solid fa-envelope fa-xl" style="color: #ff0000;"></i></span>
        <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-envelope-circle-check fa-xl" style="color: #11ff00;"></i></span>
        <input type="text" class="form-control" placeholder="user_email" aria-label="user_email" aria-describedby="addon-wrapping" v-model="user_email" required>
      </div>
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping" v-if="user_role.length === 0"><i class="fa-solid fa-user-tie fa-xl" style="color: red;"></i></span>
        <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-user-tie fa-xl" style="color: #11ff00;"></i></span>
        <input type="text" class="form-control" placeholder="user_role" aria-label="user_role" aria-describedby="addon-wrapping" v-model="user_role" required>
      </div>
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping" v-if="user_password.length === 0 || user_password.length < 5"><i class="fa-solid fa-unlock fa-xl" style="color: #ff0000;"></i></span>
        <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-solid fa-lock fa-xl" style="color: #11ff00;"></i></span>
        <input type="text" class="form-control" placeholder="set user password 5 characters or more" aria-label="user_password" aria-describedby="addon-wrapping" v-model="user_password" required>
      </div>
      <div class="input-group flex-nowrap mb-2">
        <span class="input-group-text" id="addon-wrapping" v-if="user_image.length === 0"><i class="fa-regular fa-image fa-xl" style="color: #ff0000;"></i></span>
        <span class="input-group-text" id="addon-wrapping" v-else><i class="fa-regular fa-image fa-xl" style="color: #11ff00;"></i></span>
        <input type="text" class="form-control" placeholder="user_image" aria-label="user_image" aria-describedby="addon-wrapping" v-model="user_image" required>
      </div>
    </div>
    <button class="btn btn-outline-dark" v-if="user_profile.length === 0 || user_email.length === 0 || user_role.length === 0 || user_password.length === 0 || user_password.length < 5 || user_image.length === 0" disabled>fill in all input fields</button>
    <button @click="addNewUser()" class="btn btn-outline-primary" v-else>Add user to Database <i class="fa-solid fa-database fa-bounce fa-xl" style="color: blue;"></i></button>
    <br>
    <div id="errTxt"></div>


    
  </div>
  <addProductComp/>
</div>


<div id="FourOFour" class="mt-5 pt-5 container" v-else>

  <h1>This page does not Exist</h1>
  <small>Server responded with a 404</small>

</div>


<!-- <div>
  <ChartComp />
</div> -->

</template>
<script>
import ChartComp from '../components/ChartComp.vue'
import addProductComp from '../components/addProductComp.vue'
export default {

    data(){
        return{
          // users
            user_id : null,
            user_profile : '',
            user_email : '',
            user_password : '',
            user_role : '',
            user_image : '',

            //products:
            product_id: null,
            product_name : '',
            product_desc : '',
            product_price : '',
            product_img: '',
            product_category : '',


            search : ''
        }
    },

    components : {
      ChartComp,
      addProductComp
    },

    methods : {
        getUsers(){
            this.$store.dispatch('getUsers');
        },
        updateUser(user_id){
          let userObjX = {
            user_id : user_id,
            user_profile : this.user_profile,
            user_email : this.user_email,
            user_password : this.user_password,
            user_role : this.user_role,
            user_image : this.user_image
          }
          this.$store.dispatch('updateUser', userObjX);
        },
        updateProduct(product_id){
          let prodObjX = {
            product_id : product_id,
            product_name : this.product_name,
            product_desc : this.product_desc,
            product_price : this.product_price,
            product_img : this.product_img,
            product_category : this.product_category
          }
          this.$store.dispatch('updateProducts', prodObjX)

        },
        deleteUser(user_id){
          console.log(user_id);
          this.$store.dispatch('deleteUser', user_id)
        },
        getProducts(){
          this.$store.dispatch('fetchProducts')
        },
        addNewUser(){
          const errTxt = document.getElementById("errTxt");
          if(this.user_email.length === 0 || this.user_profile.length  === 0 || this.user_password.length  === 0 || this.user_image.length  === 0 || this.user_role.length  === 0){

            errTxt.innerHTML += `<span style="color: red;">input is empty</span>`

          } else {

            this.$store.dispatch('addNewUser', this.$data)

          }
        },
        checkRole(){
          // this.$store.dispatch('loginUser')
          const userRole = $cookies.get('role')
          console.log(userRole)
          if(userRole === 'admin'){
            console.log('you have access');
          } else {
            console.log(`no access u are ${userRole}`);
          }
        },
        getUser(id){
          this.$store.dispatch('getUser', id)
        },
        deleteProduct(product_id){
          this.$store.dispatch('deleteProduct', product_id)
        },
        searchByName(){
            let storageArr = this.$store.state.products;
            let inputX = this.search;
            let resultY = storageArr.filter(prod => {
                return prod.product_name.toLowerCase().includes(inputX.toLowerCase())
            });
            return resultY;
        },
    },
    mounted(){
      this.getUsers();
      this.getProducts();
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

#FourOFour{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    flex-direction: column;
}

#userImg{
  object-fit: contain;
  scale: 60%;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid black;
}



  @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px){

}
    
</style>