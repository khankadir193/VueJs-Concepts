<template>
<h1>This topic concept is Watcher property</h1>
<h2>{{ count }}</h2>
<button v-on:click="count=count+1">+</button>
<button v-on:click="count=count-1">-</button>
</template>

    
<script>
export default {
    name: 'WatcherComponent',
    data() {
        return {
           count:0 
        }
    },
    watch:{
        count(current,prev){
            if(current>5 && current>prev){
                alert("stop counting...");
                // this.count = 0;
            }

        }
    }
}
</script>

    
<style scoped>
h1 {
    background-color: rgb(107, 4, 25);
}
</style>
