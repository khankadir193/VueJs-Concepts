<template>
<h1>This concept is form modifier</h1>
<label>while remove focus from text field</label><br>
<input type="text" v-model.lazy="data" /><br><br>
<label>remove the space from the text field</label><br>
<input type="number" v-model.trim="removeSpace" />
<h2>The input is-->{{ data }}</h2>
<h2>Remove Space from text ::{{ typeof removeSpace }}</h2>

</template>

<script>
export default {
    name:'formModifierComponent',
    data(){
        return {
            data:'',
            removeSpace:''
        }
    }
}
</script>

<style scoped>
h1{
    background-color: rgb(60, 9, 128);
    color: white;
}
</style>