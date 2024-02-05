<template>
<h1>This is the Dynamic Component</h1>
<!-- <NodeComp />
<PhpComp />
<JavaComp /> -->

<button @click="tab='PhpComp'">Load Php</button>
<button @click="tab='JavaComp'">Load Java</button>
<button @click="tab='NodeComp'">Load Node</button>

<component :is="tab" />
</template>

<script>
import JavaComp from './JavaComp.vue';
import NodeComp from './NodeComp.vue';
import PhpComp from './PhpComp.vue';

export default {
    name:'DynamicComponent',
    components:{
        JavaComp,
        NodeComp,
        PhpComp
    },
    data(){
        return{
            tab:'Java'
        }
    }
}

</script>

<style>
h1{
    background-color: blue;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}

</style>