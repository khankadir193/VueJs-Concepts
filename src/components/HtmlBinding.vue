<template>

<h1>Hi this topic is html binding</h1>
<h2>{{ text }}</h2>
<h2 v-html="tag"></h2>
<h2 v-html="tag2"></h2>

</template>
    
<script>
export default {
    name: 'HtmlBinding',
    data() {
        return {
            text: "Hi i am abdul kadir khan",
            tag: "<h2>Hi i am abdul kadir khan</h2>",
            tag2: "<h2>Hi i am abdul jabir khan</h2>",
        }
    }
}
</script>
    
<style scoped>

h1{
    background-color: black;
    color: white;
}

</style>
    
    