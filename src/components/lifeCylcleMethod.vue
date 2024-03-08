<template>
<div class="container">
<h1>This is the life cycle components</h1>
<h2>Name {{ name }} and Age: {{ age }}</h2>
<h2 ref="count">Counter:- {{ count }}</h2>
<button v-on:click="count = count+1">Counter</button>

<!-- toggle method -->
<br><br>
<button v-on:click="show = !show">toggleBtn</button>
<lifeCycleChildComp v-if="show" />
</div>
</template>

<script>
import lifeCycleChildComp from './lifeCycleChildComp.vue';
export default {
    name:'lifeCycleMethod',
    //beforeCreate method after call will be created this method.
    data(){
        console.log('this is the data method.');
        return {
            name:"Abdul Kadir Khan",
            age:24,
            count:0,
            show:true
        }
    },
    components:{
        lifeCycleChildComp
    },
    //this life cylcle method called when nothing(data,method,property) will be 
    // create means data, method, property ready to be create.
    beforeCreate(){
        this.name = "abdul jabir khan"; //this will not work
        console.log('this is the before create method');
    },
    //this method would be call after data,property,method has been created or bind
    created(){
        this.name = "abdul jabir khan";
        console.log('after data,property,method created would be called this method');
    },
    //this method would be called before render the ui on page.
    beforeMount(){
        console.log('before render UI',this.$el);
    },
    //this method would be called after render the UI.
    mounted(){
        console.log('after render UI',this.$el);
    },
    //this method would be called after update the UI.
    beforeUpdate(){
        console.log('this method called befor update the UI.',this.$refs['count'].textContent);
    },
    updated(){
        console.log('this method called after update UI.',this.$refs['count'].textContent);
    }
}


</script>

<style scoped>
h1{
    background-color: chocolate;
}
</style>