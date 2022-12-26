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
</style>
