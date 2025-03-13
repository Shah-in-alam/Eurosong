<template>
  <div id="app">
     <!-- Navigation page -->
      
    <NavigationComponent @set-active-page="setActivePage"/>
    <!--  Active Page-->
    <!-- <p> {{ activePage }}</p> -->
    <!-- Pages -->
    <pageHome v-if="activePage=='home'"></pageHome>
     <pageArtists v-if="activePage=='artists'"></pageArtists>
     <pageVoting v-if="activePage=='voting'"></pageVoting>
     <pageSongs v-if="activePage=='songs'"></pageSongs>
     <pageRanking v-if="activePage=='ranking'"></pageRanking>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'

//pages
import pageHome from './pages/pageHome.vue';
import pageVoting from './pages/pageVoting.vue';
import pageRanking from './pages/pageRanking.vue';
import pageSongs from './pages/pageSongs.vue';
import pageArtists from './pages/pageArtists.vue';

export default {
  name: 'App',
  data(){
    return {
      activePage:"voting"
    }
  },
  components: {
   NavigationComponent,
   pageArtists,
   pageHome,
   pageRanking,
   pageSongs,
   pageVoting
   },
   methods:{
    setActivePage(page){
      this.activePage=page;
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
