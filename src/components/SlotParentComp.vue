<template>
<h1>This is slot component</h1>    
<SlotChildComp data="khankadir"/>
<SlotChildComp>
    <h2>This is the html code..</h2>
</SlotChildComp>
<SlotChildComp>
    <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*" alt="">
</SlotChildComp>

<h1 class="slot">Multiple Slots By Name</h1>
<!-- multiple slot by name -->
<multipleSlotComp>
    <template v-slot:header>
        <h2>First Parameter</h2>
    </template>
    <template v-slot:main>
        <p>This is the main component</p>
    </template>
    <template v-slot:footer>
        <button>Apply</button>
    </template>
</multipleSlotComp>

<multipleSlotComp>
    <template v-slot:header>
        <h2>Second Parameter</h2>
    </template>
    <template v-slot:main>
        <h3>This is the main second component</h3>
    </template>
    <template v-slot:footer>
        <button>Btn</button>
    </template>
</multipleSlotComp>

<multipleSlotComp>
    <template v-slot:header>
        <h2>Third Parameter</h2>
    </template>
    <template v-slot:main>
        <p>This is the main third component</p>
    </template>
    <template v-slot:footer>
        <button>Buttons</button>
    </template>
</multipleSlotComp>
</template>

<script>
import SlotChildComp from './SlotChildComp.vue';
import multipleSlotComp from './multipleSlotComp.vue';

export default{
    name:'SlotParentComp',
    components:{
        SlotChildComp,
        multipleSlotComp
    }
}
</script>

<style scoped>
h1{
    background-color: rgb(78, 78, 4);
    color: white;
}
.slot{
    background-color:brown;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2rem;
    font-style: italic;
}
</style>