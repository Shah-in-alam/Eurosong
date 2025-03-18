<template>
    <div>
        <h1>
            Songs
        </h1>

        <ul>
            <li v-for="song in songs" :key="song.song_id">
                {{ song.artists.name }} - {{ song.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PageSongs",
        data() {
            return {
                songs: []
            }
        },
        mounted() {
            this.getSongs();
        },
        methods: {
            getSongs() {
                fetch(" http://localhost:3000/songs", {
                    method: "GET"
                }).then((response) => response.json())
                 .then((_songs) => {
                        this.songs = _songs;
                    });
            }
        }
    }
</script>