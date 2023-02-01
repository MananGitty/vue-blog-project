import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  const setTags = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => setTags.add(tag));
  });

  tags.value = [...setTags];

  return { tags };
};

export default useTags;
