<template>
    <h2>this is the child components..</h2>
    <h2>{{ args }}</h2>
    <h2>{{ userObj.name }} && {{ userObj.email }}</h2>
    <button v-on:click="getData">ChildBtn</button>
</template>


<script>
export default{
    name:'ChildComp',
    props:{
      args:String,
      userObj:Object,
      getData:Function  
    }
}
</script>

<style scoped>
h1{
    background-color: burlywood;
}
</style>