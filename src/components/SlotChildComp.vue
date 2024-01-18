<template>
<h2>{{ data }}</h2>    
<slot></slot>
</template>

<script>
export default{
    name:'SlotChildComp',
   props:{
    data:String
   } 
}
</script>

<style>
h1{
    background-color: rgb(78, 78, 4);
}
</style>