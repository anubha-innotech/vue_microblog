<template>
    <div class="hash-tags">
        <ul>
            <li v-for="(tag,index) in content.hashtags" @click="hashtagClickHandler(tag)" :key="index">#{{tag}}</li>
        </ul>
    </div>
    </template>
    
    <script>
    export default {
        props: {
        content: {
            type: Object
        },
        index: {
            type: Number,
        }
    },
        setup(props, context) {
        const hashtagClickHandler = (tag) => {
            console.log(tag);
            context.emit("hashtag-click-handler", tag);
        }
        return {
            hashtagClickHandler
        };
    },
    }
    </script>