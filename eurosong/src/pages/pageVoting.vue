<template>
    <div>
        {{ songs[activeSongIndex].artists.name }}
        -
       {{ songs[activeSongIndex].name }}

       <button @click="prevSong()">
        prev
       </button>

       <button @click="nextSong()">
        next
       </button>
    </div>
</template>

<script>
    export default {
        name: "PageVoting",
        data() {
            return {
                songs: [],
                activeSongIndex: 0
            }
        },
        mounted() {
            this.getSongs();
        },
        methods: {
            getSongs() {
                fetch(" http://localhost:3000/songs", {
                    method: "GET"
                })
                    .then((response) => response.json())
                    .then((_songs) => {
                        this.songs = _songs;
                    });
            },
            prevSong() {
                this.activeSongIndex--;
            },
            nextSong() {
                this.activeSongIndex++;
            },
        }
    }
</script>