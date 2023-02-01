import { ref } from "@vue/reactivity";
import { projectFireStore } from "../firebase/store";

const getData = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFireStore.collection("posts").orderBy("title", "asc").get()


      // console.log(res.docs)

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      console.log("proxy data", posts.value)

    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, load, error };
};

export default getData;
