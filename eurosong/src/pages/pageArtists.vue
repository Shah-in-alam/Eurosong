<template>
    <div>
        <h1>Artists </h1>
        <table border="1" >
      <thead>
        <tr>
          <th>Artist ID</th>
          <th>Artist Name</th>
          <th>Song</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artist in artists" :key="artist.artist_id">
          <td>{{ artist.artist_id }}</td>
          <td>{{ artist.name }}</td>
          <!-- <td>{{ artist.song }}</td> -->
        </tr>
      </tbody>
    </table>
    </div>
    
    </template>
    
    <script>
    export default{
        name: "pageArtists",
        mounted(){
            // console.log("get the data from the api.")
            fetch("http://localhost:3000/artists")
            .then((response)=>
                response.json())
                .then((data)=>{
                  this.artists =data;
                })
                .catch((error) =>console.error("Error featchig data:",error));
            
        },
        data(){
            return {
                artists:[], 
            };
          }
        }
    </script>
    <style scoped>
 table{
     margin: 0 auto;
 }
</style>