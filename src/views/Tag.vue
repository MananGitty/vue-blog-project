<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postWithTag" />
      <TagCloud :posts="postWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getData from "../composeable/getData";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getData();
    const route = useRoute();

    load();
    const postWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });
    return { posts, error, postWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
