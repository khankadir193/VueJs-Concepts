<template>
    <h2>This is the user to parent component which is i need to send the data from child to 
        parent component.
    </h2>
    <button v-on:click="getUser(name)">send data to parent</button>
</template>
        
<script>
export default {
    name: 'UserToParent',
    data(){
        // this.getUser("Abdul Kadir Khan");
        return {
            name:"Abdul Jabir Khan"
        }
    },
    props:{
        getUser:Function
    }
}
</script>
        
<style scoped>
h1 {
    background-color: palevioletred;
    color: white;
}
</style>
        
        