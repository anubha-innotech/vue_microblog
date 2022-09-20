<template>
  <SearchHashtag :searchInput="searchHashtagInput" @searchHashtagHandler="searchHashtagHandler"/>
  {{searchHashtagInput}}
  <div class="blogs-container">
    <div v-for="(content,index) in contents" :key="index">
          <CardComponent :content="content"/>
  </div>
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import SearchHashtag from './components/SearchHashtag.vue'
import {contents} from './components/contents'
import {
  ref,
  // watch,
} from 'vue'
console.log(contents);
export default {
  name: 'App',
  components: {
    CardComponent,
    SearchHashtag
},
  setup(){
    let searchHashtagInput = ref(null);

    function searchHashtagHandler(event){
      searchHashtagInput.value = event;
      contents.forEach(element => {
        element.hashtags.forEach(element=>{
          console.log(searchHashtagInput.value.value);
          if((searchHashtagInput.value.value).includes(element.slice(1)))
          {
            console.log("inside");
            console.log(element);

          }
          else{
            console.log("falile");
          }
        })
        // console.log(element.hashtags);
      })
    }
    return {
      contents,
      searchHashtagInput,
      searchHashtagHandler
    }

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background-color: rgb(63, 63, 63); */
}
.blogs-container{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
