<template>
    <h1>{{ name }}</h1>
    <h2>{{ getData("this is the get data method") }}</h2>
    <h2>{{ getName("Abdul Jabir Khan") }}</h2>
    <h2>{{ getText() }}</h2>
</template>


<script>

export default {
    name: 'methodComp',
    data() {
        return {
            name: "data method from Abdul Kadir Khan",
            getData: function (text) {
                return text;
            }
        }
    },
    methods: {
        getName(name) {
            return name;
        },
        getText() {
            return this.name;
        }
    }
}
</script>


<style scoped>

h1{
    background-color: yellowgreen;
}

</style>