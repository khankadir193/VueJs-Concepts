<template>
  <HelloWorld msg="hi i am abdul kadir khan i am from parent component.."/>
  <InterpolationComp inter="hi this is interpolation topics..." />
  <methodComp />
  <eventComp />
  <CounterComp />
  <TwoWayBinding />
  <inputValue />
  <checkbxRadio />
  <ifElseCondition />
  <forLoopComp />
  <ParentComp />
  <UserParent />
  <HtmlBinding />
  <ClassBinding />
  <UserToParentTop />
  <refComponent />
  <FormComponent />
  <formModifierComponent />
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import InterpolationComp from './components/InterpolationComp.vue';
import methodComp from './components/methodComp.vue';
import eventComp from './components/eventComp.vue';
import CounterComp from './components/CounterComp.vue';
import TwoWayBinding from './components/TwoWayBinding.vue';
import inputValue from './components/inputValue.vue';
import checkbxRadio from './components/checkbxRadio.vue';
import ifElseCondition from './components/ifElseCondition.vue';
import forLoopComp from './components/forLoopComp.vue';
import ParentComp from './components/ParentComp.vue';
import UserParent from './components/UserParent.vue';
import HtmlBinding from './components/HtmlBinding.vue';
import ClassBinding from './components/ClassBinding.vue';
import UserToParentTop from './components/UserToParentTop.vue';
import refComponent from './components/refComponent.vue';
import FormComponent from './components/formComponent.vue';
import formModifierComponent from './components/formModifierComponent.vue';



export default {
  name: 'App',
  components: {
    HelloWorld,
    InterpolationComp,
    methodComp,
    eventComp,
    CounterComp,
    TwoWayBinding,
    inputValue,
    checkbxRadio,
    ifElseCondition,
    forLoopComp,
    ParentComp,
    UserParent,
    HtmlBinding,
    ClassBinding,
    UserToParentTop,
    refComponent,
    FormComponent,
    formModifierComponent
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
