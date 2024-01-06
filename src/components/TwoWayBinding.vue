<template>
    <h1>This topic is a two way data binding</h1>
    <h2>{{ counter }}</h2>
    <input type="text" v-model="counter" />

</template>

<script>
export default {
    name:'TwoWayBinding',
    data(){
        return {
            counter:0
        }
    }
}
</script>

<style scoped>

h1{
    background-color: cornflowerblue;
}

</style>