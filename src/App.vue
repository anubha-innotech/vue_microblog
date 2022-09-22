<template>
    <div class="search-container">
    <!-- <SearchHashtag @clicked="onClickChild"/> -->
    
    <label for="search-hashtag">Search Hashtag</label>
    <input type="text" id="search-hashtag" v-model="searchInput">
</div>
<div class="blogs-container">
    <div v-for="(content,index) in searchedContents" :key="index">
        <CardComponent :content="content" :index="index" @hashtagClickHandler="hashtagClickHandler" @likeBtnHandler="likeBtnHandler(index)" />
    </div>
</div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
// import SearchHashtag from './components/SearchHashtag.vue'
import {
    contents
} from './components/contents'
import {
    ref,
    computed,
    reactive,
} from 'vue'
// console.log(contents);
export default {
    name: 'App',
    components: {
        CardComponent,
        // SearchHashtag
    },

    setup() {
        // to get reactive contents.js data 
        let contentsBlog  = reactive(contents);
        // console.log(contentsBlog);
        let searchInput = ref("");

        function likeBtnHandler(index) {
              contentsBlog[index].likes += 1;
                contentsBlog[index].liked = true;
                console.log(contentsBlog[index]);
            } 

        function hashtagClickHandler(tag) {
            console.log("clicked" + tag);
            searchInput.value = tag;
        }

        // const searchedContents = computed(() => {
            // if (searchInput.value.length != 0) {
                // return contentsBlog.filter((content => {
                    // return content.hashtags.includes(searchInput.value)
                // }))
            // } else {
                // return contentsBlog
            // }
        // })

        const searchedContents = computed(() => {
            if (searchInput.value) {
                return contentsBlog.filter((content => {
                    // console.log(content);
                    return content.hashtags.some(element=>{
                        // console.log(element);
                        if(element.toLowerCase().includes(searchInput.value.toLowerCase())){
                            // console.log("match");
                            return true
                        }
                        else {
                            return false
                        }
                    })
                }))
            } else {
                return contentsBlog
            }
        })

        return {
            contents,
            contentsBlog,
            searchInput,
            searchedContents,
            likeBtnHandler,
            hashtagClickHandler,
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.search-container {
    padding: 10px 40px;
    font-size: 1.2em;
    background-color: teal;
    color: white;
}

.search-container input {
    margin-left: 10px;
    padding: 10px;
    padding-bottom: 2px;
    border: none;
    font-size: .8em;
    border-bottom: 1px solid white;
    background: transparent;
    letter-spacing: 1px;
    color: white;
}

.search-container input:focus {
    outline: none;
}

.blogs-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
