<template>
    <h1>This topic is class binding (css binding)</h1>
    <h2 :class="applyStyle">Abdul Kadir Khan Yousufzai</h2>
    <button v-on:click="colorful=!colorful">Apply color</button>
</template>
        
<script>
export default {
    name: 'ClassBinding',
    data() {
        return {
            colorful:false
        }
    },
    computed:{
        applyStyle(){
            return {
                green:this.colorful,
                err:true,
                other:false
            }
            //this is multiple css classes we can implement..
        }
    }
}
</script>
        
<style scoped>
h1 {
    background-color: palevioletred;
    color: white;
}
.green{
    background-color: green;
    font-size: 18px;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;

}
.other{
    font-size: 28px;
}

.err{
    color: red;
}
</style>
        
        