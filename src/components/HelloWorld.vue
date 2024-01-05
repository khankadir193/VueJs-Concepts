<template>
<div class="hello">
    <h1>Hi i am abdul kadir khan</h1>
    <h2>{{ msg }}</h2>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    background-color: aqua;
}
/* h1{
    background-color: blue;
} */
</style>
