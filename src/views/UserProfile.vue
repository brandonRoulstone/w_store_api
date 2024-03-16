<template>
    <div id="box">
        <!-- <h1>{{$store.state.loggedUser}}</h1>
        <div v-for="user in $store.state.loggedUser" v-bind:key="user">
            {{ user.user_role }}
        </div> -->
    </div>
</template>
<script>
export default {
    // methods : {
    //     userIsLogged(){
    //         this.$store.dispatch('adminAuth')
    //     }
    // },
    // mounted() {
    //     this.userIsLogged()
    // },
}
</script>
<style scoped>
    #box{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
</style>