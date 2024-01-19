<template>
    <h2>{{ data }}</h2>
    <slot></slot>

    <!-- multiple slot by name example -->
    <div class="slot-container">
        <slot name="header"></slot>
        <slot name="main"></slot>
        <slot name="footer"></slot>

    </div>
</template>

<script>
export default {
    name: 'SlotChildComp',
    props: {
        data: String
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(78, 78, 4);
}
.slot-container{
    border: 1px solid blue;
    width: 15%;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>