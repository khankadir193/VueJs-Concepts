<template>
<h1>This topic Reuse component</h1>
<ul>
    <li v-for="item in user" :key="item.name">
        <UserComp :itemData="item" :getData="getData" />   
    </li>
</ul>
</template>

<script>
import UserComp from './UserComp.vue';

export default {
    name: 'UserParent',
    components: {
        UserComp
    },
    data() {
        return {
            user: [{
                    name: "Abdl Kadir Khan",
                    email: "abdulkadirk059@gmail.com"
                },
                {
                    name: "Abdul Jabir Khan",
                    email: "abduljabir@gmail.com"
                },
                {
                    name: "Rehan Khan",
                    email: "rehankhan@gmail.com"
                },
                {
                    name: "Abdullah Khan",
                    email: "abdullahkhan@gmail.com"
                },
                {
                    name: "Iqra Khan",
                    email: "iqrakhan@gmail.com"
                },
            ]
        }
    },
    methods:{
        getData(item){
            alert(item);
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: rgb(59, 6, 75);
    color: white;
}
ul{
    list-style: none;
}
</style>
