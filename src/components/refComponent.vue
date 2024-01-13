<template>
    <h1>This topic is regarding ref attribut (we can and get and set the data from the dom)</h1>

    <label>Enter your text into textfield</label><br><br>
    <input type="text" ref="input" />
    <button v-on:click="getData">getData</button>

</template>
        
<script>

export default {
    name: 'formComponent',
    methods:{
        getData(){
            this.$refs.input.focus();
            const res = this.$refs.input.value;
            console.log('res..',res);
            this.$refs.input.style.color = "red";
        }
    }
}
</script>
        
<style scoped>
h1 {
    background-color: rgb(12, 119, 114);
    color: white;
}
</style>
        
        