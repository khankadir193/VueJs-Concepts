<template>
<h1>This concept is non-propsData</h1>
<nonPropsChild data="this non-props data Parent component" id="khankadir" />

</template>

    
<script>
import nonPropsChild from './non-PropsChild.vue';
export default {
    name: 'non-PropsParent',
    data() {
        return {
            data: '',
            removeSpace: ''
        }
    },
    components:{
        nonPropsChild
    }
}
</script>

    
<style scoped>
h1 {
    background-color: rgb(32, 2, 30);
    color: white;
}
</style>
