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
    <div class="likes">
        <span class="heart-icon" @click="likeBtnHandler">&#10084;</span>
        {{content.likes}}
    </div>
    <div class="hash-tags">
        <ul>
            <li v-for="(tag,index) in content.hashtags" :key="index">{{tag}}</li>
        </ul>
    </div>
    <div>

    </div>
</div>
</template>

<script>
export default{
    name: 'CardComponent',
    props:{
        content:{
            type: Object
        }
    },
    setup(){
        function likeBtnHandler(){
            console.log("clicked");
        }
        return{
            likeBtnHandler,
        }
    }
}
</script>

<style>
.card{
    width: 250px;
    border: 1px solid black;
    margin: 10px;
    height: 370px;
    text-align: center;
    /* background-color: black; */
}

.card-heading{
    padding: 20px;
}

.card-main-content{
    padding: 30px;
    height: 200px;
    /* background-color:darkorange; */
}
.horizontal-line{
    border-bottom: 1px solid black;
}

.likes{
    margin: 10px;
}
.hash-tags ul{
    list-style-type: none;
}

.heart-icon{
    cursor: pointer;
}
</style>