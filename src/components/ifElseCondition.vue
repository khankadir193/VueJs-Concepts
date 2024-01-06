<template>
    <h1>This is the if else condition..</h1>
    <h2 v-if="show">if condition</h2>
    <h2 v-else>else condition</h2>

    <button v-on:click="show=!show">toggleButton</button>

</template>

<script>
export default {
    name: 'ifElseCondition',
    data() {
        return {
            show:false
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(209, 53, 53);
}

</style>
