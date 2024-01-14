<template>
<!-- <h2>This is the non-props data child components</h2> -->

<div>
    <h3>Jabir</h3>
    <h3>Kadir</h3>
    <!-- <h3 v-bind="$attrs">Rehan</h3> -->
    <h3>{{ id }}</h3>
    <h3>{{ data }}</h3>
</div>

</template>

    
<script>
export default {
    name: 'non-PropsChild',
    inheritAttrs:false,
    // props:{
    //     id:String,
    //     data:String
    // }
    
}
</script>

    
<style scoped>

</style>
