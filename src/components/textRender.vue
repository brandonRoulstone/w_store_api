<template>
    <div id="text">
        {{ RenderContent }}
    </div>
</template>
<script>
export default {
    props: {
    RenderContent: String,
  }
}
</script>
<style>

@media (max-width: 385px) {
    #text{
        text-align: justify;
    }
}
    
</style>