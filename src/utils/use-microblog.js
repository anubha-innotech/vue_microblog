
import {
    blogContents
} from '../components/blogContents'

import {
    ref,
    computed,
    reactive,
} from 'vue';
export default () => {
    // To get reactive contents.js data 
    let contentsOfBlog = reactive(blogContents);
    // console.log(contentsBlog);
    const searchInput = ref("");

    // Like button function : increases the likes by one when click on it 
    const likeBtnHandler = (index) => {
        contentsOfBlog[index].likes += 1;
        contentsOfBlog[index].liked = true;
        // console.log(contentsOfBlog[index]);
    }

    // Hashtag click event function : clicking on any hashtag filters all the blog by that hashtag
    const hashtagClickHandler = (tag) => {
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