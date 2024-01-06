<template>
    <h1>This is the get input value concepts(later on i need to complete this logic concepts.)</h1>

    <div v-if="displayData">
        <h2>{{ email }}</h2>
        <h2>{{ password }}</h2>
    </div>

    <input type="text" placeholder="enter your email" v-model="email" />
    <br><br>
    <input type="password" placeholder="enter your password" v-model="password" />
    <br><br>
    <button v-on:click="getInputValue">getInput</button>
</template>

<script>
export default {
    name: 'inputValue',
    data() {
        return {
            email: null,
            password: null,
            displayData: null
        }
    },
    methods: {
        getInputValue() {
            console.log('email...', this.email, 'pass..', this.password);
            this.displayData = {
                email: this.email,
                password: this.password
            }
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(20, 207, 145);
}

button {
    background-color: purple;
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
