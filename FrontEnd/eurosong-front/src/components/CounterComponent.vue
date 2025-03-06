<template>
<div>
    <h3>Initial value :0</h3>
    <h3>
        {{ fn }}
        {{ value }}
    </h3>
     <button @click="add()" v-show="value<10">+</button>
     <button @click="minus()" v-bind:disabled="value<=0">-</button>
</div>
<div>

</div>
</template>

<script>
export default {
    name:"CounterComponent",
    props()
    {
        fn:{
            type: String;
            required: true
        }
    },
    data()
        {
            return{
                value: 0
            }
        },
        methods:{
            add()
            {
                this.value++;
                
                if(this.value=3)
            {
                this.$emit("declarewiner"+this.fn)
            }
            },
            minus()
            {
                if(this.value>0)
            {
                this.value--;
            }
            }

        }
        
}

</script>