<template>
  <div v-for="post in posts" :key="post.id">
    <PostDetails :post="post" />
  </div>
</template>

<script>
import PostDetails from "./PostDetails.vue";

export default {
  props: ["posts"],
  components: { PostDetails },
};
</script>

<style></style>
