<template>
    <div id="box">
        <div v-for="user in userIsLogged()" v-bind:key="user" id="user">
            <div>
                <img :src="user.user_image" :alt="user.user_profile" class="img-fluid rounded-5 shadow" height="300" width="300">
            </div>
            <div id="userCol" class="container-fluid fw-bold">
                <div class="text-start">
                    <span id="text">User name:</span>
                    {{ user.user_profile }}
                </div>
                <div class="text-start">
                    <span id="text">Email address:</span>
                    {{ user.user_email }}
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
    }

    #user{
        display: flex;
        flex-direction: row;
    }

    #userCol{
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    #overflow{
        max-width: 390px;
        overflow-x: scroll;
    }

    #text{

        text-align: justify;
    }
</style>