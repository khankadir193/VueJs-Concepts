<template>
    <h1>This is the api call components...</h1>
    <h2>{{ weatherData }}</h2>
</template>


<script>
import axios from 'axios';

export default {
    name: "ApiCall",
    data() {
        return {
           weatherData : []
        }
    },
    mounted() {
        const apiKey = "C0ODxQjcfUUxptGrpUAKEcW30oPyUhv1";
        const apiUrl = "https://api.tomorrow.io/v4/weather/forecast";
        const location = "mumbai";

        axios
            .get(apiUrl, {
                params: {
                    location,
                    apikey: apiKey,
                    // Add more parameters as needed
                },
            })
            .then((response) => {
                console.log('responseData..withAxios..',response);
                this.weatherData = response.data.timelines; // Adjust the data extraction based on the API response structure
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
        //this is api calling with fetch method..
        // const options = { method: 'GET', headers: { accept: 'application/json' } };

        // fetch('https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=C0ODxQjcfUUxptGrpUAKEcW30oPyUhv1', options)
        //     .then(response => response.json())
        //     .then(response => {

        //         console.log('response..result', response)
        //     })
        //     .catch(err => console.error(err));
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
</style>