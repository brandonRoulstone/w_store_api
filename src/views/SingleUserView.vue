<template>
    <div v-for="x of $store.state.user" v-bind:key="x.user_id">
        <img :src="x.user_image" :alt="x.user_profile">
        <h1>{{ x.user_profile }}</h1>
        <h1>{{ x.user_email }}</h1>
        <h1>{{ x.user_role }}</h1>
    </div>
</template>
<script>
export default {
    methods : {
        getUser(id){
          this.$store.dispatch('getUser', id)
        }
    }
}
</script>
<style lang="">
    
</style>