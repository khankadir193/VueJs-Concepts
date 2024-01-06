<template>
    <h1>This concepts i passing the data into child components</h1>
    <h2>this is the Parent component</h2>
    <ChildComp args="passing data into child component" :userObj="user" :getData="getData"/>
</template>


<script>
import ChildComp from './ChildComp.vue';

export default {
    name:"ParentComp",
    components:{
        ChildComp
    },
    data(){
        return {
            user:{name:"Kadir",email:"kadirkhan@gmail.com"}
        }
    },
    methods:{
        getData(){
            console.log('this is the parent method..??');
            alert("this is the parent method")
        }
    }
}
</script>

<style scoped>
h1{
    background-color: orange;
}
</style>