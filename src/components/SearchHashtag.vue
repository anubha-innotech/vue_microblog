<template>
    <label for="search-hashtag" >Search Hashtag</label>
    <input type="text" id="search-hashtag" v-model="searchInput">
    {{searchInput}}
    <button @click="searchHashTagBtn">Search</button>
</template>
<script>
import {
    ref
} from 'vue'
    export default{
        props:{
            searchHashtagInput:{
                type: String,
            }
        },
        setup(props,context){
            let searchInput = ref(props.searchHashtagInput);
            
            function searchHashTagBtn(){
                context.emit('search-hashtag-handler',searchInput)
            }
            return{
                searchInput,
                searchHashTagBtn
            }
        }
    }
</script>
