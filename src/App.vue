<template>
<div class="search-container">
    <SearchHashtag v-model="searchInput" />
    <!-- {{searchInput}} -->
</div>
<div class="blogs-container">
    <div v-for="(content,index) in searchedContents" :key="index">
        <CardComponent :content="content" :index="index" @hashtagClickHandler="hashtagClickHandler" @likeBtnHandler="likeBtnHandler(index)" />
    </div>
</div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import SearchHashtag from './components/SearchHashtag.vue'
import useMicroblog from './utils/use-microblog'
export default {
    name: 'App',
    components: {
        CardComponent,
        SearchHashtag
    },

    setup() {
        const {
            blogContents,
            contentsOfBlog,
            searchInput,
            searchedContents,
            likeBtnHandler,
            hashtagClickHandler,
        } = useMicroblog();
        return {
            blogContents,
            contentsOfBlog,
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
    padding: 10px 0px 2px 2px;
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
