<template>
  <Main>
    <template #content>
      <h1>Ini Home</h1>
    </template>
  </Main>
</template>

<script setup>
import { onMounted } from "vue";
import Main from "../components/layouts/Main.vue";
import axios from "axios";

const getUsers = () => {
  axios
    .get("https://apidatakit.daengveloper.com/")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getUsers();
});
</script>
