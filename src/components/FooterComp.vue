<template>
    <footer class="bg-body-tertiary d-flex justify-content-center">
            <p class="mb-2 text-black text-center">&copy;{{this.year()}} | All rights reserved</p>
    </footer>
</template>
<script>

export default {
    methods : {
        year : function () {
            let date = new Date().getFullYear()
            return date
        }
    },
    mounted(){
        this.year()
    }
}
</script>
<style scoped>
</style>