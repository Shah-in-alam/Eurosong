<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Nilou vs Coline: the swaing competition.</h1>
    <div v-for="(participent,index) in participents": key="index"> </div>
   <CounterComponent fn="Nilou" @declarewiner="declareWiner"/>
   <CounterComponent fn="Collin"@declareWiner="declareWiner"/>
  </div>
  <div v-if="isWinnerDeclared">
    The winner is {{ winnerName }}
  </div>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'

export default {
  name: 'App',
  data()
  {
    return{
      isWinnerDeclared: false,
      winnerName:"",
      participents: ["Nillou","collin","victor"]
      }
    },
  
  components: {
    CounterComponent
  },
  methods:{
    declareWiner(fn){
      console.log("The winner is "+ fn);
    }
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
