<template>
    <h1>This is the for loop concepts..</h1>

    <ul>
        <li v-for="name in names" :key="name">
            {{ name }}
        </li>
    </ul>
    <br><br>
    <ul>
        <li v-for="emp in employees" :key="emp.name">
            Name is {{ emp.name }} && Profession {{ emp.profession }}
        </li>
    </ul>

</template>

<script>
export default {
    name: 'forLoopComp',
    data() {
        return {
            names:["Kadir","Jabir","Abdullah","Iqra","Bushra"],
            employees:[
                {
                    name:"Rehan Khan",
                    profession:"Student"
                },
                {
                    name:"Sameer Shaikh",
                    profession:"Doctor"
                },
                {
                    name:"Younus Khan",
                    profession:"Software Engineer"
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgba(50, 21, 179, 0.712);
}

</style>
