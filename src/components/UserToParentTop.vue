<template>
    <h1>This topic is sending the data to user to parent components</h1>
    <h2>{{ childUser }}</h2>
    <UserToParent :getUser="getUserName" />
</template>
        
<script>

import UserToParent from './UserToParent.vue';

export default {
    name: 'UserToParentTop',
    data(){
        return {
            childUser:""
        }
    },
    components:{
        UserToParent
    },
    methods:{
        getUserName(name){
            this.childUser = name;
            alert(name);
        }
    }
}
</script>
        
<style scoped>
h1 {
    background-color: rgb(126, 10, 97);
    color: white;
}
</style>
        
        