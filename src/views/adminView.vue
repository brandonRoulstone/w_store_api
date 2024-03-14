<template>

    <h1>Manage products in store</h1>
    <div id="products" class="gap-4">
        <div v-for="product in $store.state.products" v-bind:key="product.product_id">
            <div class="card" style="width: 18rem;">
                <img :src="product.product_img" class="card-img-top" :alt="product.product_name" loading="lazy" id="productImg">
                <div class="card-body">
                  <h5 class="card-title">{{product.product_name}}</h5>
                  <p class="card-text" id="textOve">{{product.product_desc}}</p>
                  <button href="#" class="btn btn-danger mx-1"><i class="fa-solid fa-trash fa-lg" style="color: #ffffff;"></i></button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop' + product.product_id">
                    update
                  </button>
<!-- 
                  product_name : '',
                  product_desc : '',
                  product_price : '',
                  product_category : '' -->
                  
                  <!-- Modal -->
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

        <div class="mx-4" v-for="user in $store.state.users" v-bind:key="user">
    
           <div class="" id="card" style="width: 18rem;">
               <img :src="user.user_image" class="card-img-top" :alt="user.user_profile" id="userImg">
               <div class="card-body">
    
                 <h5 class="card-title">{{ user.user_profile }}</h5>
    
                 <p class="card-text">{{ user.user_email }}</p>

                 <p class="card-text">{{ user.user_role }}</p>

                 <!-- <p class="card-text">{{ user.user_password }}</p> -->

                 <div class="d-flex justify-content-evenly">
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
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_profile">
                                </div>
                                <div class="input-group flex-nowrap mb-2">
                                    <span class="input-group-text" id="addon-wrapping">Email</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_email">
                                </div>
                                <div class="input-group flex-nowrap mb-2">
                                    <span class="input-group-text" id="addon-wrapping">Role</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_role">
                                </div>
                                <div class="input-group flex-nowrap mb-2">
                                    <span class="input-group-text bg-warning" id="addon-wrapping">User password</span>
                                    <input type="text" class="form-control" placeholder="Cannot see or update user password!" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_password" readonly>
                                </div>
                                <div class="input-group flex-nowrap mb-2">
                                    <span class="input-group-text" id="addon-wrapping">Profile image</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" v-model="user_image" value="">
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

</template>
<script>
export default {

    data(){
        return{
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
            product_category : ''
        }
    },

    methods : {
        getUsers(){
            this.$store.dispatch('getUsers');
        },
        updateUser(user_id){
            let userObjX ={
                user_id : user_id,
                user_profile : this.user_profile,
                user_email : this.user_email,
                user_password : this.user_password,
                user_role : this.user_role,
                user_image : this.user_image
            }
            this.$store.dispatch('updateUser', userObjX);

            console.log(this.$data, userObjX);
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
        }
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

table { 
    width: 100%; 
    border-collapse: collapse; 
  }
  /* Zebra striping */
  tr:nth-of-type(odd) { 
    background: #eee; 
  }
  th { 
    background: #333; 
    color: white; 
    font-weight: bold; 
  }
  td, th { 
    padding: 6px; 
    border: 1px solid #ccc; 
    text-align: left; 
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
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "First Name"; }
	td:nth-of-type(2):before { content: "Last Name"; }
	td:nth-of-type(3):before { content: "Job Title"; }
	td:nth-of-type(4):before { content: "Favorite Color"; }
	td:nth-of-type(5):before { content: "Wars of Trek?"; }
	td:nth-of-type(6):before { content: "Secret Alias"; }
	td:nth-of-type(7):before { content: "Date of Birth"; }
	td:nth-of-type(8):before { content: "Dream Vacation City"; }
	td:nth-of-type(9):before { content: "GPA"; }
	td:nth-of-type(10):before { content: "Arbitrary Data"; }
}
    
</style>