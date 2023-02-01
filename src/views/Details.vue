<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">DELETE</button>
  </div>

  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getSingleData from "../composeable/getSingleData";
import Spinner from "../components/Spinner.vue";
import { projectFireStore } from "../firebase/store";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  components: { Spinner },

  setup(props) {
    const router = useRouter();
    const { post, error, load } = getSingleData(props.id);
    load();

    const handleClick = async () => {
      await projectFireStore.collection("posts").doc(props.id).delete();
      router.push({ name: "Home" });
    };
    return { post, error, handleClick };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
