<template>
    <h1>This is the simple application for counter Increment/Decrement</h1>
    <h2>{{ counter }}</h2>
    <div class="counterContainer">
        <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
    </div>
</template>


<script>
export default {
    name: 'CounterComp',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            return this.counter += 1;
        },
        decrement() {
            return this.counter -= 1;
        }
    }
}

</script>


<style scoped>

.counterContainer{
    display: flex;
    justify-content: space-evenly;
}
h1 {
    background-color: violet;
}

button {
    background-color: rebeccapurple;
    width: 10%;
    height: 5vh;
    border: none;
    outline: none;
    font-size: large;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    font-size: 1.5rem;
}
</style>