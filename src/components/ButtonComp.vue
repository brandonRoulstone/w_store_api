<template>
    <button id="btn" class="btn mx-3 mt-3">{{ btnContent }}</button>
</template>
<script>
export default {
  props: {
    btnContent: String
  }
}
</script>
<style scoped>
#btn {
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.12s;
    background: linear-gradient(violet, rgb(112, 204, 235));
    overflow: hidden;
}

#btn:hover{
    transform: scale(95%);
    box-shadow: 2px 2px 10px 2px rgb(0, 0, 0) inset;
    border: 1px solid rgb(135, 227, 234);
}

</style>