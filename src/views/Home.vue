<template>
  <main>
    <ul>
      <li v-for="u in user.list" :key="u.id">{{ u.name }}</li>
    </ul>
    <h1>{{ user.list[0].name }}</h1>
  </main>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, reactive, toRef, onBeforeMount, onUnmounted } from "vue";

const user = reactive({
  list: [{}],
});

const getAllUser = () => {
  axios
    .get("http://localhost:3000/user")
    .then((result) => {
      user.list = result.data.data;
    })
    .catch((error) => {
      user.list = error.response.data.message;
    });
};

onMounted(() => {
  setTimeout(() => {
    getAllUser();
  }, 5000);
});
</script>

<style></style>
