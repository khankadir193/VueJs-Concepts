<template>
<h1>This is slot component</h1>    
<SlotChildComp data="khankadir"/>
<SlotChildComp>
    <h2>This is the html code..</h2>
</SlotChildComp>
<SlotChildComp>
    <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*" alt="">
</SlotChildComp>

<h1>Multiple Slots By Name</h1>
<!-- multiple slot by name -->
<SlotChildComp>
    <template v-slot:header>
        <h2>First Parameter</h2>
    </template>
    <template v-slot:main>
        <p>This is the main component</p>
    </template>
    <template v-slot:footer>
        <button>Apply</button>
    </template>
</SlotChildComp>

<SlotChildComp>
    <template v-slot:header>
        <h2>Second Parameter</h2>
    </template>
    <template v-slot:main>
        <p>This is the main second component</p>
    </template>
    <template v-slot:footer>
        <button>Btn</button>
    </template>
</SlotChildComp>

<SlotChildComp>
    <template v-slot:header>
        <h2>Third Parameter</h2>
    </template>
    <template v-slot:main>
        <p>This is the main third component</p>
    </template>
    <template v-slot:footer>
        <button>Buttons</button>
    </template>
</SlotChildComp>
</template>

<script>
import SlotChildComp from './SlotChildComp.vue';

export default{
    name:'SlotParentComp',
    components:{
        SlotChildComp
    }
}
</script>

<style scoped>
h1{
    background-color: rgb(78, 78, 4);
    color: white;
}
</style>