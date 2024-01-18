<template>
<h1>This topic concept is Computed property</h1>
<h2>This is the Normal calculations : {{ dollors * rupeeVal - discount }}</h2>
<h2>This is the normal method for calculations : {{ getResultMethod }}</h2>
<h2>This is the computed method calculations:{{ getResult }}</h2>
</template>
<script>
export default{
    name:'computedProperty',
    data(){
        return {
            dollors:100,
            rupeeVal:70,
            discount:10
        }
    },
    methods:{
        getResultMethod(){
            return (this.dollors*this.rupeeVal)-this.discount;
        }
    },
    computed:{
        getResult(){
            return (this.dollors*this.rupeeVal)-this.discount;
        }
    }
}
</script>

<style scoped>
h1{
    background-color: rgb(196, 10, 196);
}
</style>