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