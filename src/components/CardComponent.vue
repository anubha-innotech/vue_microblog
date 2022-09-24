<template>
<div class="card">
    <div class="card-heading">
        {{content.title}}
    </div>
    <div class="horizontal-line"></div>
    <div class="card-main-content">
        {{content.details}}
    </div>
    <div class="horizontal-line"></div>
    <div class="likes" @click="likeBtnHandler">
        <span class="heart-icon" :class="{red : content.liked}">&#10084;</span>
        {{content.likes}}
    </div>
    <HashtagComponent :content="content" :index="index" @hashtagClickHandler="hashtagClickHandler"/>
</div>
</template>

<script>
import HashtagComponent from './HashtagComponent.vue'

export default {
    name: "CardComponent",
    props: {
        content: {
            type: Object
        },
        index: {
            type: Number,
        }
    },

    setup(props, context) {
        const likeBtnHandler = () => {
            context.emit("like-btn-handler", props.index);
        }
        const hashtagClickHandler = (tag) => {
            console.log(tag);
            context.emit("hashtag-click-handler", tag);
        }
        return {
            likeBtnHandler,
            hashtagClickHandler
        };
    },
    components: { HashtagComponent }
}
</script>

<style>
.card {
    width: 250px;
    border: 1px solid black;
    margin: 10px;
    height: 370px;
    text-align: center;
    background-color: rgb(186, 224, 222);
    border: none;
    border-radius: 10px;
}

.card-heading {
    padding: 20px;
    letter-spacing: 1.5px;
}

.card-main-content {
    padding: 30px 25px;
    height: 200px;
    line-height: 1.4em;
}

.horizontal-line {
    border-bottom: 1px solid black;
}

.likes {
    margin: 10px;
    cursor: pointer;
}

.hash-tags ul {
    list-style-type: none;
}

.hash-tags ul li {
    cursor: pointer;
}

.hash-tags ul li:hover {
    color: black;
    font-size: 1.05em;
}

.red {
    color: red;
}

.heart-icon:hover {
    color: red;
}
</style>
