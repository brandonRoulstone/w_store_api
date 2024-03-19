<template>
    <div id="box">
        <!-- <h1>{{$store.state.loggedUser}}</h1> -->
        <div v-for="user in userIsLogged()" v-bind:key="user" id="user">
            <div>
                <img :src="user.user_image" :alt="user.user_profile" class="image-fluid rounded-5 shadow" height="300" width="300">
            </div>
            <div id="userCol" class="container-fluid">
                <div class="fs-2">
                    <span id="text">User name:</span>
                    {{ user.user_profile }}
                </div>
                <div class="fs-2">
                    <span id="text">@Email address:</span>
                    {{ user.user_email }}
                </div>
                <span class="fs-2" id="text">Password:</span>
                <div class="fs-2" id="overflow">
                    {{ user.user_password }}
                </div>
                <button type="button" class="btn btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Change details
                  </button>
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
        
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
                          <button type="button" class="btn btn-primary">Understood</button>
        
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <button class="btn btn-danger">Delete acc</button>
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
        }
    },
    mounted() {
        this.userIsLogged()
    },
}
</script>
<style scoped>
    #box{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    #user{
        display: flex;
        flex-direction: row;
    }

    #userCol{
        display: flex;
        flex-direction: column;
        
    }

    #overflow{
        max-width: 390px;
        overflow-x: scroll;
    }

    #text{

        text-align: justify;
    }
</style>