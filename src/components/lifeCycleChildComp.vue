<template>
<h1 ref="user">This is the child componets for life cycle method for parent comp</h1>

</template>

<script>

export default {
    name:'lifeCycleChildComp',
    //this method will be called the before destroy the component..
    beforeUnmount(){
        console.log('beforeUnmound method..',this.$refs['user']);
    },
    //this method will be called the after destroy the component..
    unmounted(){
        console.log('after Unmound method..',this.$refs['user']);
    }
}

</script>

<style scoped>
h1{
    color: aqua;
}

</style>

