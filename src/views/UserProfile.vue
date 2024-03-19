<template>
    <div id="box">
        <!-- <h1>{{$store.state.loggedUser}}</h1> -->
        <div v-for="user in userIsLogged()" v-bind:key="user" id="user">
            <div>
                <img :src="user.user_image" alt="" class="image-fluid" height="300" width="300">
            </div>
            <div id="userCol" class="container-fluid mx-5">
                <div class="fs-2">
                    {{ user.user_email }}
                </div>
                <div class="fs-2">
                    {{ user.user_profile }}
                </div>
                <div class="fs-2" id="overflow">
                    {{ user.user_password }}
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
    }

    #userCol{
        display: flex;
        flex-direction: column;
    }

    #overflow{
        max-width: 238px;
        overflow-x: scroll;
    }
</style>