import { ref } from "@vue/reactivity";
import { projectFireStore } from "../firebase/store";


const getSingleData = (id) => {
  const post = ref([]);
  const error = ref(null);

  const load = async () => {
    try {

      const res = await projectFireStore.collection("posts").doc(id).get();
      console.log(res);
      if (!res.exists) {

        throw Error("NO INDIVIDUAL DATA FOUND");
      }

      post.value = { ...res.data(), id: res.id }



      // const data = await fetch("http://localhost:3000/posts/" + id);

      // post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, load, error };
};

export default getSingleData;
