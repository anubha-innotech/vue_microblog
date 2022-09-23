<template>
<label for="search-hashtag">Search Hashtag</label>
<input type="text" id="search-hashtag" v-model="searchInput">
</template>

<script>
import {
    computed
} from 'vue'
export default {
    props: {
        modelValue: {
            type: String,
        }
    },
    emits: ['update:modelValue'],
    setup(props, {
        emit
    }) {
        const searchInput = computed({
            get: () => props.modelValue,
            set: (val) => emit('update:modelValue', val),
        });
        return {
            searchInput
        };
    }
}
</script>
