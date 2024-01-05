<template>
<h1>{{ inter }}</h1>
<h2>{{ 4+3*4 }}</h2>
<h2>Name Length : {{ "Abdul Kadir Khan".length }}</h2>
<h2>Name: {{ name }}</h2>
<h2>email: {{ email }}</h2>
<!-- <h2>email: {{ email = 10 }}</h2> we can assign the value in the email  -->
<h2>function data: {{ getData("parameter is passing in this function") }}</h2>


</template>


<script>
export default {
    name:'InterpolationComp',
    props:{
        inter:String
    },
    data(){
        return {
            name:"Abdul Kadir Khan",
            email:"abdul.kadir2019@gmail.com",
            getData:function(args){
                return args;
            }
        }
    }
}

</script>

<!-- this is style only work work this component only -->
<style scoped>
h1{
    background-color: rebeccapurple;
}
</style>