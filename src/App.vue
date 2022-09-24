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
import {
    blogContents
} from './components/blogContents'
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
        SearchHashtag
    },

    setup() {
        // To get reactive contents.js data 
        let contentsOfBlog = reactive(blogContents);
        // console.log(contentsBlog);
        const searchInput = ref("");

        // Like button function : increases the likes by one when click on it 
        let likeBtnHandler = (index) => {
            contentsOfBlog[index].likes += 1;
            contentsOfBlog[index].liked = true;
            // console.log(contentsOfBlog[index]);
        }

        // Hashtag click event function : clicking on any hashtag filters all the blog by that hashtag
        let hashtagClickHandler = (tag) => {
            // console.log("clicked" + tag);
            searchInput.value = tag;
        }

        const searchedContents = computed(() => {
            if (searchInput.value.length <= 3) {
                return contentsOfBlog.filter((content => {
                    // console.log(content);
                    return content.hashtags.some(element => {
                        // console.log(element);
                        if (element.toLowerCase().includes(searchInput.value.toLowerCase())) {
                            // console.log("match");
                            return true
                        } else {
                            return false
                        }
                    })
                }))
            } else if (searchInput.value.length > 3) {
                return contentsOfBlog.filter((content => {
                    return content.title.toLowerCase().includes(searchInput.value) || content.details.toLowerCase().includes(searchInput.value.toLowerCase()) || content.hashtags.some(element => {
                        if (element.toLowerCase().includes(searchInput.value.toLowerCase())) {
                            return true
                        } else {
                            return false
                        }
                    })
                }))
            } else {
                return contentsOfBlog
            }
        })

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
