<template>
<div>
<h1>This is the life cycle components</h1>
<h2>Name {{ name }} and Age: {{ age }}</h2>
</div>
</template>

<script>
export default {
    name:'lifeCycleMethod',
    //beforeCreate method after call will be created this method.
    data(){
        console.log('this is the data method.');
        return{
            name:"Abdul Kadir Khan",
            age:24
        }
    },
    //this life cylcle method called when nothing(data,method,property) will be 
    // create means data, method, property ready to be create.
    beforeCreate(){
        this.name = "abdul jabir khan";
        console.log('this is the before create method');
    },
    created(){
        this.name = "abdul jabir khan";
        console.log('after data,property,method created would be called this method');
    }
}


</script>

<style scoped>
h1{
    background-color: chocolate;
}
</style>