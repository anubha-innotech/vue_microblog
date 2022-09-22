<template>
<label for="search-hashtag">Search Hashtag</label>
<input type="text" id="search-hashtag" v-model="searchInput" @click="searchHashTagBtn">
<!-- <button @click="searchHashTagBtn">Search</button> -->
</template>

<script>
import {
    ref
} from 'vue'
export default {
    // props: {
    //     searchHashtagInput: {
    //         type: String,
    //     }
    // },
    setup(context) {
        let searchInput = ref("");
        // let searchInput = ref(props.searchHashtagInput);
        function searchHashTagBtn(){
            context.emit('clicked', searchInput)
        }

        return {
            searchInput,
            searchHashTagBtn
        }
    }
}
</script>
