<template>
    <!-- <h1>This is the multiple Slot child component</h1> -->
   <div class="slot-container">
        <slot name="header"></slot>
        <slot name="main"></slot>
        <slot name="footer"></slot>

    </div> 
</template>

<script>
export default {
    name:"multipleSlotComp"
}

</script>


<style scoped>
h1 {
    background-color: rgb(153, 15, 134);
}
.slot-container{
    border: 1px solid blue;
    width: 15%;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
}


</style>