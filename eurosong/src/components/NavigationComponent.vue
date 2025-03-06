<template>
<nav>
      <ul>
        <li
        v-for="item in items" :key="item"  @click="setActivePage(item)">
          {{ item }}
        </li>
        
      </ul>
    </nav>
</template>
<script>
export default{
    name:"NavigationComponent",
    data(){
        return {
            items:[
                "home",
                "artists",
                "ranking",
                "voting"
            ]
        }
    },
    methods:{
        setActivePage(page){
            this.$emit('set-active-page',page)
        }
    }
}

</script>