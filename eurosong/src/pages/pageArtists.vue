<template>
    <div>
        <h1>Artists </h1>
        <table border="1" >
      <thead>
        <tr>
          <th>Artist ID</th>
          <th>Artist Name</th>
          <!-- <th>Song</th> -->
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
    <hr>
    <label for="input_new_name">
      New name
    </label>
    <input id="input_new_name" type="text" v-model="newArtists">
    <button @click="addArtists()">
      Add new artisits
    </button>
    </div>
    
    </template>
    
    <script>
    export default {
        name: "PageArtists",
        mounted() {
            this.fetchArtists();
        },
        data() {
            return {
                artists: [],
                newArtist: ""
            }
        },
        methods: {
            fetchArtists() {
                fetch("http://localhost:3000/artists", {
                    method: "GET"
                })
                    .then((data) => {
                        return data.json();
                    })
                    .then((artistsApi) => {
                        this.artists = artistsApi;
                    })
            },
            addArtists() {
                fetch("http://localhost:3000/artists", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.newArtist
                    })
                })
                    .then((data) => {
                        return data.json();
                    })
                    .then(() => {
                        this.fetchArtists();
                    })
            }
        }
    }
</script>
    <style scoped>
 table{
     margin: 0 auto;
 }
</style>