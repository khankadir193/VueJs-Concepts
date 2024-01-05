<template>
  <HelloWorld msg="hi i am abdul kadir khan i am from parent component.."/>
  <InterpolationComp inter="hi this is interpolation topics..." />
  <methodComp />
  <eventComp />
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import InterpolationComp from './components/InterpolationComp.vue';
import methodComp from './components/methodComp.vue';
import eventComp from './components/eventComp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    InterpolationComp,
    methodComp,
    eventComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
