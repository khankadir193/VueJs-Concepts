<template>
    <h1>This is the api call components...</h1>
    <div class="item-container">
    <ul v-for="item in data" :key="item.id">
        <li v-if="item.id">id:{{ item.id }}</li>
        <li v-if="item.email">Email:{{ item.email }}</li>
        <li v-if="item.first_name">firstName:{{ item.first_name }}</li>
        <li v-if="item.last_name">lastName:{{ item.last_name }}</li>
        <li v-if="item.avatar">
            <img :src="item.avatar" alt="avatar" />
        </li>
    </ul>    
    </div>
    
</template>


<script>
import axios from 'axios';

export default {
    name: "ApiCall",
    data() {
        return {
            data: []
        }
    },
    mounted() {
        axios.get('https://reqres.in/api/users?page=1').then((response) => {
            console.log('response...???', response);
            this.data = response.data.data;
        }).catch(err => {
            console.error('Error in fetching data...', err);
        })
    }
}
</script>

<style scoped>
h1 {
    background-color: blue;
    color: aliceblue;
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
}

.item-container{
    display: flex;
    /* overflow: hidden; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}


ul{
    list-style: none;
    background: yellow;
    color: purple;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .5rem;
}

img{
    border-radius: 10rem;
    border: 3px solid purple;
}


</style>