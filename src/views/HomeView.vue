<template>
  <input type="text" v-model="searchText" />
  <p>{{ searchText }}</p>
  <div class="home" v-for="name in matchingNames" :key="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "HomeView",
  setup() {
    const searchText = ref("");
    const names = ref([
      "Manan",
      "Ali",
      "Haris",
      "Ammar",
      "Moomal",
      "Sidra",
      "Melisa",
    ]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(searchText.value));
    });
    return { names, searchText, matchingNames };
  },
};
</script>
