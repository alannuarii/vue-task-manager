<template>
  <li class="">
    <RouterLink :to="link" class="nav-link link-dark">
      <i :class="icon" class="me-2"></i>
      {{ item }}
    </RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  item: String,
  icon: String,
  link: String,
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
.active {
  background-color: #ced4da;
  border-radius: 0 30px 30px 0;
}
li {
  transition: ease-in-out 0.3s;
}
li:hover {
  font-weight: 500;
}
</style>
