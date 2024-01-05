<template>
    <h1>event methods topics</h1>

    <div class="btnContainer">
        <button v-on:click="getData">first btn</button>
        <button v-on:click="getParamsData('button 2 is clicked')">second btn</button>
        <button v-on:click="getParamsData('button 3 is clicked')">third btn</button>
        <button v-on:dblclick="getParamsData('this button has been clicked two times')">double click</button>
        <button v-on:mouseover="getConsole">mouseOver</button>
    </div>

    <div>
        
    </div>
</template>

<script>

export default {
    name: 'eventComp',
    methods: {
        getData() {
            return alert('onclick button has been clicked...');
        },
        getParamsData(args) {
            return alert(args);
        },
        getConsole(){
            console.warn('mouse is overing....');
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: chocolate;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: xx-large;
    font-style: italic;
}

button {
    background-color: aqua;
    width: 10%;
    height: 5vh;
    border: none;
    outline: none;
    font-size: large;
    font-family: 'Times New Roman', Times, serif;
}

.btnContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>