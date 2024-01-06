<template>
    <h1>This is the Radio and checkbox concepts..</h1>
    <label for="tech">Technology</label>
    <br><br>

    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="technology" id="java"/>
    <label for="javascript">JavaScript</label>
    <input type="checkbox" value="javascript" v-model="technology" id="javascript" />
    <label for="nodejs">Node Js</label>
    <input type="checkbox" value="nodejs" v-model="technology" id="nodejs" />
    <h2>Selected Technology : {{ technology }}</h2>
    <br><br>
    <label for="student">Who i am ?</label><br>
    <label for="student">Student</label>
    <input type="radio" value="student"  name="chckbx" v-model="emp" id="student" />
    <label for="employee">Employee</label>
    <input type="radio" value="employee" name="chckbx" v-model="emp" id="employee" />

    <h2>i am a ...{{ emp }}</h2>

</template>

<script>
export default {
    name: 'checkbxRadio',
    data() {
        return {
            technology:[],
            emp:[]
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(88, 196, 0);
}

</style>
