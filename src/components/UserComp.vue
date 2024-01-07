<template>
<div class="userContainer">
    <h2>{{ itemData.name }}</h2>
    <h2>{{ itemData.email }}</h2>
    <button v-on:click="getData(itemData.name)">UserBtn</button>
</div>
</template>

<script>
export default {
    name: 'UserComp',
    props: {
        itemData: Object,
        getData:Function
    }
}
</script>

<style scoped>
.userContainer{
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    background-color: aqua;
    border: 2px dotted purple;
    border-radius: 10px;
    align-items: center;
}

button{
    border: none;
    background-color: beige;
    outline: none;
    width: 10%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

